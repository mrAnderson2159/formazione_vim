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

  void _openAddExpenseOverlay() {
    // To make a fullscreen overlay we set isScrollControlled = true, which
    // can also be usefull to take space enough when the phone keyboard shows up
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
    return Scaffold(
      // When you have an AppBar, the space above for the clock, wifi. battery etc...
      // is automatically reserved and it gives the app a better look
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
          Expanded(child: ExpensesList(expenses: _registerExpenses)),
        ],
      ),
    );
  }
}
