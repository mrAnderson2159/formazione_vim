import 'package:flutter/material.dart';
import 'package:quiz_app/start_app_content.dart';
import 'package:quiz_app/question_screen.dart';

// The main StatefulWidget that manages the different screens of the app
class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  String activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'quesiton-screen';
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Container(
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
            child: Center(
              child:
                  activeScreen == 'start-screen'
                      ? StartAppContent(switchScreen)
                      : const QuestionScreen(),
            ),
          ),
        ),
      ),
    );
  }
}
