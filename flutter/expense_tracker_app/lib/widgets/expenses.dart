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

  void _openAddExpenseOverlay() {
    // When you type "show" you can see a cery complete list of features
    // provided by Material for showing stuff on the screen.
    // For this task we're using showModalBottomSheet.
    //
    // This utility function takes 2 required parameters: context and builder
    // Context is the context of the widget from which you call this function.
    // We could use the context of the build method, but since we're inside
    // a State object, we can use the context property of this class, which is,
    // under the hood, the same context of the build method.
    // This context contains all the information about the Expenses widget,
    // like its position in the widget tree, theme information, etc... and, as
    // said, it's provided by the State class.
    //
    // The builder parameter is a function that returns the widget that should
    // be displayed inside the modal. We already saw this pattern when we
    // used the ListView.builder widget.
    showModalBottomSheet(
      context: context,
      builder: (BuildContext ctx) {
        return const NewExpense();
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
