import 'package:flutter/material.dart';
import 'package:quiz_app/data/questions.dart';
import 'package:quiz_app/answer_button.dart';
import 'package:quiz_app/models/quiz_question.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({super.key, required this.onSelectAnswer});

  final void Function(String answer) onSelectAnswer;

  @override
  State<QuestionScreen> createState() {
    return _QuestionScreenState();
  }
}

class _QuestionScreenState extends State<QuestionScreen> {
  int currentQuestionIndex = 0;

  void answerQuestion(String selectedAnswer) {
    // this is offered by State up here
    widget.onSelectAnswer(selectedAnswer);

    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    QuizQuestion currentQuestion = questions[currentQuestionIndex];
    List<AnswerButton> answers =
        currentQuestion.shuffledAnswer
            .map((a) => AnswerButton(a, onPressed: () => answerQuestion(a)))
            .toList();

    return Container(
      margin: EdgeInsets.all(40),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            currentQuestion.question,
            style: GoogleFonts.lato(
              color: const Color.fromARGB(255, 237, 223, 252),
              fontWeight: FontWeight.bold,
              fontSize: 24,
            ),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 30),
          ...answers,
        ],
      ),
    );
  }
}
