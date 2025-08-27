import 'package:flutter/material.dart';
import 'package:expense_tracker_app/models/expense.dart';

class ExpensesList extends StatelessWidget {
  const ExpensesList({super.key, required this.expenses});

  final List<Expense> expenses;

  @override
  Widget build(BuildContext context) {
    // When you have a list of unkown big lenght, Column is not the ideal,
    // this is because you want to render just a small amount of these
    // elements. You need a lazy something.. something like ListView!
    //
    // ListView are scrollable elements and the builder constructor
    // loads the elements only when they are visible or are about to be visible
    return ListView.builder(
      itemCount: expenses.length,
      itemBuilder: (ctx, index) => Text(expenses[index].title),
    );
  }
}
