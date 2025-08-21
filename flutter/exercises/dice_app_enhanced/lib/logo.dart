import 'package:flutter/material.dart';
import 'dart:math';

class Logo extends StatelessWidget {
  const Logo({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Transform.rotate(
          angle: pi / 4,
          child: Image.asset(
            'assets/images/dice-6.png',
            width: 100,
            height: 100,
            fit: BoxFit.contain,
          ),
        ),
        SizedBox(height: 20),
        Text(
          "Welcome to Dice Roller Plus!",
          style: TextStyle(color: Colors.white, fontSize: 25),
        ),
      ],
    );
  }
}
