import 'package:flutter/material.dart';
import 'package:expense_tracker_app/models/expense.dart';
import 'package:expense_tracker_app/expenses_list.dart';

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          const Text('The chart'),
          // When you have a Column inside a Column or staff like that,
          // Flutter will give you problems because it doesn't know
          // how to properly render it. In such cases you need to use Expanded
          Expanded(child: ExpensesList(expenses: _registerExpenses)),
        ],
      ),
    );
  }
}
