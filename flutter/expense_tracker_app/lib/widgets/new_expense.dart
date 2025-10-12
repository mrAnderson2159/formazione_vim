import 'package:flutter/material.dart';
import 'package:expense_tracker_app/models/expense.dart';

enum _InputFields { title, amount }

class NewExpense extends StatefulWidget {
  final void Function(Expense expense) addExpense;

  const NewExpense(this.addExpense, {super.key});

  @override
  State<NewExpense> createState() => _NewExpenseState();
}

class _NewExpenseState extends State<NewExpense> {
  final Map<_InputFields, TextEditingController> _controllers = {
    _InputFields.title: TextEditingController(),
    _InputFields.amount: TextEditingController(),
  };

  DateTime? _selectedDate;
  Category _selectedCategory = Category.leisure;

  void _presentDatePicker() async {
    final now = DateTime.now();
    final firstDate = DateTime(now.year - 1, now.month, now.day);
    final lastDate = DateTime(now.year, now.month + 1, now.day);

    final DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: now,
      firstDate: firstDate,
      lastDate: lastDate,
    );

    setState(() {
      _selectedDate = pickedDate;
    });
  }

  void submit() {
    final List<String> wrongFields = [];

    String title = _controllers[_InputFields.title]!.text.trim();
    String amount = _controllers[_InputFields.amount]!.text.trim();
    DateTime? date = _selectedDate;
    Category category = _selectedCategory;

    if (title.isEmpty) {
      wrongFields.add("Title");
    }

    if (amount.isEmpty || double.tryParse(amount) == null) {
      wrongFields.add('Amount');
    }

    if (date == null) {
      wrongFields.add('Date');
    }

    if (wrongFields.isEmpty) {
      final Expense expense = Expense(
        title: title,
        amount: double.parse(amount),
        date: date!,
        category: category,
      );

      widget.addExpense(expense);
      Navigator.pop(context);
    } else {
      print("Bad format: ${wrongFields.join(', ')} are wrong fields");
    }
  }

  // It's VERY IMPORTANT to remember of using dispose when using
  // TextEditingController because otherwise the controller will survive in
  // memory even if the container Widged ceased to exist
  @override
  void dispose() {
    for (final c in _controllers.values) {
      c.dispose();
    }

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(
            maxLength: 50,
            decoration: const InputDecoration(label: Text('Title')),
            controller: _controllers[_InputFields.title],
          ),
          Row(
            children: [
              Expanded(
                child: TextField(
                  keyboardType: TextInputType.numberWithOptions(decimal: true),
                  decoration: const InputDecoration(
                    label: Text('Amount'),
                    prefixText: '€ ',
                  ),
                  controller: _controllers[_InputFields.amount],
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      _selectedDate == null
                          ? 'No date selected'
                          : formatter.format(_selectedDate!),
                    ),
                    IconButton(
                      onPressed: _presentDatePicker,
                      icon: const Icon(Icons.calendar_month),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              DropdownButton(
                value: _selectedCategory,
                items: Category.values
                    .map(
                      (category) => DropdownMenuItem(
                        value: category,
                        child: Text(category.name.toUpperCase()),
                      ),
                    )
                    .toList(),
                onChanged: (value) {
                  if (value == null) {
                    return;
                  }

                  setState(() {
                    _selectedCategory = value;
                  });
                },
              ),
              const Spacer(),
              TextButton(
                onPressed: () {
                  // This is used to close the modal
                  Navigator.pop(context);
                },
                child: const Text('Cancel'),
              ),
              ElevatedButton(
                onPressed: submit,
                child: const Text('Save Expense'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
