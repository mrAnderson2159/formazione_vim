import 'package:flutter/material.dart';
import 'package:dice_app_enhanced/dice_roller_card.dart';
import 'package:dice_app_enhanced/logo.dart';

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key, required this.colors});

  const GradientContainer.purple({super.key})
    : colors = const [
        Color.fromARGB(220, 34, 3, 171),
        Color.fromARGB(255, 135, 3, 171),
      ];

  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: AlignmentGeometry.topLeft,
          end: AlignmentGeometry.bottomRight,
          colors: colors,
        ),
      ),
      child: Column(
        children: [
          SizedBox(height: 100),
          Logo(),
          Expanded(child: Center(child: DiceRollerCard())),
        ],
      ),
    );
  }
}
