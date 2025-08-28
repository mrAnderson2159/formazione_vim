import 'package:flutter/material.dart';

class NewExpense extends StatefulWidget {
  const NewExpense({super.key});

  @override
  State<NewExpense> createState() => _NewExpenseState();
}

class _NewExpenseState extends State<NewExpense> {
  String _enteredTitled = '';

  void _saveTitleInput(String inputValue) {
    _enteredTitled = inputValue;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          // We use TextField for inputs
          TextField(
            maxLength: 50,
            // The label is added via decoration
            decoration: const InputDecoration(label: Text('Title')),
            onChanged: _saveTitleInput,
          ),
          Row(
            children: [
              ElevatedButton(
                onPressed: () => print(_enteredTitled),
                child: const Text('Save Expense'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
