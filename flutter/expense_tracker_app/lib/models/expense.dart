import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';
import 'package:intl/intl.dart';

const uuid = Uuid();
final formatter = DateFormat('dd/MM/yyyy');

enum Category { food, travel, leisure, work, housing }

const Map<Category, IconData> categoryIcons = {
  Category.food: Icons.lunch_dining,
  Category.travel: Icons.flight,
  Category.housing: Icons.house,
  Category.leisure: Icons.movie,
  Category.work: Icons.work,
};

class Expense {
  Expense({
    required this.title,
    required this.amount,
    required this.date,
    required this.category,
  }) : id = uuid.v4();

  final String id;
  final String title;
  final double amount;
  final DateTime date;
  final Category category;

  String get formattedDate {
    return formatter.format(date);
  }
}

class ExpenseBucket {
  final Category category;
  final List<Expense> expenses;

  const ExpenseBucket({required this.category, required this.expenses});

  double get totalExpenses {
    // The .fold() method is a very handy way to perform
    // accumulation operations on any List.
    // However, since we haven't seen it before,
    // let's also look at how to achieve the same result
    // using a traditional for-in loop.

    // double sum = 0;
    // for (final expense in expenses) {
    //   sum += expense.amount;
    // }

    return expenses.fold(0.0, (sum, expense) => sum + expense.amount);
  }
}
