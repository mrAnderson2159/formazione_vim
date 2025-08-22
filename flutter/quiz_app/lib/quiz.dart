import 'package:flutter/material.dart';
import 'package:quiz_app/start_app_content.dart';
import 'package:quiz_app/question_screen.dart';
import 'package:quiz_app/results_screen.dart';
import 'package:quiz_app/data/questions.dart';

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
  List<String> selectedAnswers = [];

  void goToQuestionScreen() {
    setState(() {
      activeScreen = 'quesiton-screen';
      selectedAnswers = [];
    });
  }

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);

    if (selectedAnswers.length == questions.length) {
      setState(() {
        activeScreen = 'results-screen';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget;

    switch (activeScreen) {
      case 'start-screen':
        screenWidget = StartAppContent(goToQuestionScreen);
        break;
      case 'quesiton-screen':
        screenWidget = QuestionScreen(onSelectAnswer: chooseAnswer);
        break;
      case 'results-screen':
        screenWidget = ResultsScreen(
          chosenAnswers: selectedAnswers,
          onRestart: goToQuestionScreen,
        );
        break;
      default:
        throw 'Invalid screen';
    }

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
            child: Center(child: screenWidget),
          ),
        ),
      ),
    );
  }
}
