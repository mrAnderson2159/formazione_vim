import 'package:flutter/material.dart';
import 'package:quiz_app/data/quesitons.dart';
import 'package:quiz_app/answer_button.dart';
import 'package:quiz_app/models/quiz_question.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({super.key});

  @override
  State<QuestionScreen> createState() {
    return _QuestionScreenState();
  }
}

class _QuestionScreenState extends State<QuestionScreen> {
  int currentQuestionIndex = 0;

  void answerQuestion() {
    if (currentQuestionIndex + 1 < questions.length) {
      setState(() {
        currentQuestionIndex++;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    QuizQuestion currentQuestion = questions[currentQuestionIndex];
    List<AnswerButton> answers =
        currentQuestion
            .getShuffledAnswer()
            .map((a) => AnswerButton(a, onPressed: answerQuestion))
            .toList();

    return Container(
      margin: EdgeInsets.all(40),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            currentQuestion.question,
            style: TextStyle(color: Colors.white),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 30),
          ...answers,
        ],
      ),
    );
  }
}
