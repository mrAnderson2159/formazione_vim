import 'package:flutter/material.dart';
import 'package:quiz_app/base_button.dart';

class StartAppContent extends StatelessWidget {
  const StartAppContent({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/quiz-logo.png',
          width: 300,
          color: Color.fromARGB(180, 255, 255, 255),
        ),
        const SizedBox(height: 70),
        const Text(
          'Learn Flutter the fun way!',
          style: TextStyle(color: Colors.white, fontSize: 22),
        ),
        const SizedBox(height: 30),
        // In order to understand how to add an icon to a button,
        // we will use the OutlinedButton instead of our custom Basebutton
        OutlinedButton.icon(
          onPressed: () {},
          style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
          // the .icon constructor accepts "label" as property for text
          // instead of "child"
          label: const Text("Start Quiz"),
          icon: const Icon(Icons.arrow_right_alt, size: 24),
        ),
      ],
    );
  }
}
