import 'package:flutter/material.dart';
import 'package:first_app/styled_text.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer({
    super.key,
    required this.colors,
    required this.text,
  });

  const GradientContainer.purple({super.key, this.text = 'Purple Flutter!'})
    : colors = const [
        Color.fromARGB(220, 26, 2, 80),
        Color.fromARGB(255, 45, 7, 98),
      ];

  final List<Color> colors;
  final String text;

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
      child: Center(child: Image.asset('assets/images/dice-3.png')),
    );
  }
}
