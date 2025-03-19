import 'package:flutter/material.dart';
import 'package:quiz_app/start_app_content.dart';

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            Color.fromARGB(255, 123, 3, 252),
            Color.fromARGB(255, 122, 58, 164),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Center(child: StartAppContent()),
    );
  }
}
