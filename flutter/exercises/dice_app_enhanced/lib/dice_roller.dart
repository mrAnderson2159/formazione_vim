import 'package:flutter/material.dart';
import 'dart:math';

final random = Random();

int roll() {
  return random.nextInt(6) + 1;
}

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  List<int> dices = [roll(), roll()];
  String score = '';

  void rollDices() {
    setState(() {
      for (int i = 0; i < dices.length; i++) {
        dices[i] = roll();
      }

      int sum = dices.reduce((a, b) => a + b);
      score = 'You rolled $sum';
    });
  }

  Image getDicePicture(int n) {
    return Image.asset(
      'assets/images/dice-${dices[n]}.png',
      width: 150,
      height: 150,
      fit: BoxFit.contain,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [getDicePicture(0), SizedBox(width: 10), getDicePicture(1)],
        ),
        const SizedBox(height: 30),
        Text(score, style: TextStyle(color: Colors.white, fontSize: 20)),
        const SizedBox(height: 30),
        OutlinedButton(
          onPressed: rollDices,
          style: OutlinedButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(fontSize: 25),
          ),
          child: Text("Roll dices"),
        ),
      ],
    );
  }
}
