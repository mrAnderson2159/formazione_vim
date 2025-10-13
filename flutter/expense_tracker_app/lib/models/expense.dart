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

  const ExpenseBucket._(this.expenses, this.category);

  // The previous design of this class exposed a structural weakness
  // that potentially allowed the creation of an object containing
  // expenses from different categories, regardless of the chosen one.
  // As a result, it could incorrectly return the sum of all expenses.
  //
  // In this improved version, we use two advanced concepts:
  // a private constructor and a factory constructor.
  //
  // The private constructor encapsulates object creation, preventing
  // external code from instantiating the class directly.
  // The factory constructor, on the other hand, is a special kind of
  // constructor that doesn’t immediately create an instance, but
  // instead runs some logic before deciding whether and how to do so.
  // Because no instance exists yet at that point, the `this` keyword
  // cannot be used inside a factory constructor.
  //
  // In this case, we filter the provided list of expenses, just like
  // in the initializer of the previous example, and then call the
  // private constructor to return a properly built instance.
  factory ExpenseBucket.forCategory(List<Expense> allExpenses, category) {
    final List<Expense> filtered = allExpenses
        .where((expense) => expense.category == category)
        .toList();
    return ExpenseBucket._(filtered, category);
  }

  double get totalExpenses {
    return expenses.fold(0.0, (sum, expense) => sum + expense.amount);
  }
}
