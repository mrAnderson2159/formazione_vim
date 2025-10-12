import 'package:expense_tracker_app/widgets/new_expense.dart';
import 'package:flutter/material.dart';
import 'package:expense_tracker_app/models/expense.dart';
import 'package:expense_tracker_app/widgets/expenses_list/expenses_list.dart';

class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<Expenses> createState() {
    return _ExpensesState();
  }
}

class _ExpensesState extends State<Expenses> {
  final List<Expense> _registerExpenses = [
    Expense(
      title: 'Groceries',
      amount: 54.99,
      date: DateTime.now(),
      category: Category.food,
    ),
    Expense(
      title: 'Movie Tickets',
      amount: 24.50,
      date: DateTime.now().subtract(const Duration(days: 2)),
      category: Category.leisure,
    ),
    Expense(
      title: 'Monthly Rent',
      amount: 950.00,
      date: DateTime.now().subtract(const Duration(days: 10)),
      category: Category.housing,
    ),
    Expense(
      title: 'Bus Pass',
      amount: 30.00,
      date: DateTime.now().subtract(const Duration(days: 3)),
      category: Category.travel,
    ),
    Expense(
      title: 'Coffee',
      amount: 3.75,
      date: DateTime.now(),
      category: Category.food,
    ),
  ];

  void _addExpense(Expense expense) {
    setState(() {
      _registerExpenses.add(expense);
    });
  }

  void _removeExpense(Expense expense) {
    final int expenseIndex = _registerExpenses.indexOf(expense);

    setState(() {
      _registerExpenses.remove(expense);
    });

    // We call this line to remove istantaneously any other SnackBar that might be
    // showing. This way we avoid the queue of SnackBars that would show one after
    // the other if the user deletes multiple expenses in a row.
    ScaffoldMessenger.of(context).clearSnackBars();

    // This shows a snack bar lasting for 3 seconds that allows to undo the
    // accidental deleting of an expense
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("Expense deleted"),
        duration: Duration(seconds: 3),
        action: SnackBarAction(
          label: "Undo",
          onPressed: () => setState(() {
            _registerExpenses.insert(expenseIndex, expense);
          }),
        ),
      ),
    );
  }

  void _openAddExpenseOverlay() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (BuildContext ctx) {
        return NewExpense(_addExpense);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    Widget mainContent = const Center(
      child: Text("No expenses found. Start adding some!"),
    );

    if (_registerExpenses.isNotEmpty) {
      mainContent = ExpensesList(
        expenses: _registerExpenses,
        onDismissed: _removeExpense,
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: Text("Expense Tracker App"),
        actions: [
          IconButton(
            onPressed: _openAddExpenseOverlay,
            icon: const Icon(Icons.add),
          ),
        ],
      ),
      body: Column(
        children: [
          const Text('The chart'),
          Expanded(child: mainContent),
        ],
      ),
    );
  }
}
