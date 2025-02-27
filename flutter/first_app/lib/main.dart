import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(home: Scaffold(body: GradientContainer())));
}

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        // Add a gradient background
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color.fromARGB(220, 26, 2, 80),
            Color.fromARGB(255, 45, 7, 98),
          ],
        ),
      ),
      child: const Center(
        child: Text(
          'Hello World!',
          style: TextStyle(fontSize: 28, color: Colors.white),
        ),
      ),
    );
  }
}
