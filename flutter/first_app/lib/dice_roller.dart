import 'package:flutter/material.dart';
import 'dart:math';

final random = Random(); // dart:math.Random

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  var currentDiceRoll = random.nextInt(6) + 1;

  void rollDice() {
    setState(() {
      currentDiceRoll = random.nextInt(6) + 1; // .nextInt(n) returns 0 - n-1
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset('assets/images/dice-$currentDiceRoll.png', width: 200),
        // Alternativa a padding in TextButton:style
        const SizedBox(height: 30),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(fontSize: 24),
            // padding: const EdgeInsets.only(top: 30),
          ),
          child: const Text('Roll dice'),
        ),
      ],
    );
  }
}
