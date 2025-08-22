import 'package:flutter/material.dart';

class StartAppContent extends StatelessWidget {
  // Here we accept a function as a positional parameter
  // in order to pass it to the OutlinedButton widget
  const StartAppContent(this.startQuiz, {super.key});

  final void Function() startQuiz;

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
        OutlinedButton.icon(
          onPressed: startQuiz,
          style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
          label: const Text("Start Quiz"),
          icon: const Icon(Icons.arrow_right_alt, size: 24),
        ),
      ],
    );
  }
}
