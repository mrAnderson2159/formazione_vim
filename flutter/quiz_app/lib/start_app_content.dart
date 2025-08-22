import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class StartAppContent extends StatelessWidget {
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
        Text(
          'Learn Flutter the fun way!',
          style: GoogleFonts.lato(color: Colors.white, fontSize: 24),
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
