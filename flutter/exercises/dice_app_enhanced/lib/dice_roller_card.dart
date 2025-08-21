import 'package:flutter/material.dart';
import 'package:dice_app_enhanced/dice_roller.dart';

class DiceRollerCard extends StatelessWidget {
  const DiceRollerCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 12,
      color: Color.fromARGB(20, 240, 220, 240),
      margin: EdgeInsets.symmetric(horizontal: 24),
      child: Container(
        padding: EdgeInsets.symmetric(vertical: 32),
        child: DiceRoller(),
      ),
    );
  }
}
