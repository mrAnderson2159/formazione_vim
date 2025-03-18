import 'package:flutter/material.dart';

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-3.png';

  void rollDice() {
    setState(() {
      activeDiceImage = 'assets/images/dice-1.png';
      print('Dice rolled');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(activeDiceImage, width: 200),
        // Alternativa a padding in TextButton:style
        // const SizedBox(height: 30),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(fontSize: 24),
            padding: const EdgeInsets.only(top: 30),
          ),
          child: const Text('Roll dice'),
        ),
      ],
    );
  }
}
