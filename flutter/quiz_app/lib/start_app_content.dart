import 'package:flutter/material.dart';
import 'package:quiz_app/base_button.dart';

class StartAppContent extends StatelessWidget {
  const StartAppContent({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset('assets/images/quiz-logo.png', width: 300),
        const SizedBox(height: 70),
        const Text(
          'Learn Flutter the fun way!',
          style: TextStyle(color: Colors.white, fontSize: 22),
        ),
        const SizedBox(height: 30),
        Basebutton(text: 'Start Quiz', onPressed: () {}),
      ],
    );
  }
}
