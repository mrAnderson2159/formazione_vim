import 'package:flutter/material.dart';
import 'package:first_app/styled_text.dart';
import 'package:first_app/dice_roller.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  GradientContainer({super.key, required this.colors, required this.text});

  GradientContainer.purple({super.key, this.text = 'Purple Flutter!'})
    : colors = const [
        Color.fromARGB(220, 26, 2, 80),
        Color.fromARGB(255, 45, 7, 98),
      ];

  final List<Color> colors;
  final String text;
  var activeDiceImage = 'assets/images/dice-3.png';

  void rollDice() {
    activeDiceImage = 'assets/images/dice-1.png';
    print('Dice rolled');
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        // Add a gradient background
        gradient: LinearGradient(
          begin: startAlignment,
          end: endAlignment,
          colors: colors,
        ),
      ),
      child: Center(child: DiceRoller()),
    );
  }
}
