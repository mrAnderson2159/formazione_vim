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
  // As first step, we define a variable to hold the active screen
  // and let it null initially
  Widget? activeScreen;

  // The initState method is called once when the stateful widget
  // is inserted in the widget tree.
  // Our purpose here is to pass a function to the StartAppContent,
  // which couldn't be done in the constructor directly because
  // "switchScreen" is not defined yet.
  @override
  void initState() {
    activeScreen = StartAppContent(switchScreen);
    super.initState();
  }

  // This function will be passed to the StartAppContent widget
  // and will be called when the user taps the "Start Quiz" button.
  void switchScreen() {
    setState(() {
      activeScreen = const QuestionScreen();
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
            // Since activeScreen is a widget, we can pass it as a pointer
            child: Center(child: activeScreen),
          ),
        ),
      ),
    );
  }
}
