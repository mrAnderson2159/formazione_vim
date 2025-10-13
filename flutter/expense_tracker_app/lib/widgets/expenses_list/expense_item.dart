import 'package:expense_tracker_app/models/expense.dart';
import 'package:flutter/material.dart';

class ExpenseItem extends StatelessWidget {
  const ExpenseItem({super.key, required this.expense});

  final Expense expense;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        child: Column(
          // We dispose the title on the left side of the card.
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // We can style our widgets using the properties provided by
            // the current app theme. The Theme class exposes a static
            // .of(context) method that allows access to the active theme
            // at a given point in the widget tree.
            //
            // Note that you are not required to use titleLarge as is:
            // you can also use .copyWith() on titleLarge
            // to apply further customizations
            Text(expense.title, style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 4),
            Row(
              children: [
                Text('${expense.amount.toStringAsFixed(2)} €'),
                const Spacer(),
                Row(
                  children: [
                    Icon(categoryIcons[expense.category]),
                    const SizedBox(width: 8),
                    Text(expense.formattedDate),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
