import 'package:expense_tracker_app/widgets/expenses_list/expense_item.dart';
import 'package:flutter/material.dart';
import 'package:expense_tracker_app/models/expense.dart';

class ExpensesList extends StatelessWidget {
  const ExpensesList({
    super.key,
    required this.expenses,
    required this.onDismissed,
  });

  final List<Expense> expenses;
  final void Function(Expense expens) onDismissed;

  @override
  Widget build(BuildContext context) {
    // Flutter allows to swipe elements away with the Dismissible widget. This
    // widget requires a key to identify the element. Here we use the ValueKey
    // which takes any value and uses it as the key. In this case we use the
    // expense object itself as the value. When the user swipes the item away,
    // the onDismissed function is called and we pass the expense that was
    // swiped away to the function.
    //
    // onDismissed requires the direction of the swipe, but we don't need it here.
    return ListView.builder(
      itemCount: expenses.length,
      itemBuilder: (ctx, index) => Dismissible(
        key: ValueKey(expenses[index]),
        direction: DismissDirection.endToStart,
        background: Container(
          // we apply the same margin of the cards
          margin: Theme.of(context).cardTheme.margin,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: AlignmentGeometry.centerRight,
              end: AlignmentGeometry.centerLeft,
              // we use error color
              colors: [
                Theme.of(context).colorScheme.error,
                Theme.of(context).colorScheme.error.withAlpha(150),
              ],
            ),
          ),
          alignment: Alignment.centerRight,
          padding: const EdgeInsets.only(right: 20),
          child: const Icon(Icons.delete, color: Colors.white, size: 30),
        ),
        onDismissed: (direction) => onDismissed(expenses[index]),
        child: ExpenseItem(expense: expenses[index]),
      ),
    );
  }
}
