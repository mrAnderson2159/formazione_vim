import 'package:flutter/material.dart';
import 'package:quiz_app/data/questions.dart';
import 'package:quiz_app/question_summary.dart';
import 'package:google_fonts/google_fonts.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({
    super.key,
    required this.chosenAnswers,
    required this.onRestart,
  });

  final List<String> chosenAnswers;
  final void Function() onRestart;

  List<Map<String, Object>> get summaryData {
    final List<Map<String, Object>> summary = [];

    for (int i = 0; i < chosenAnswers.length; i++) {
      summary.add({
        'question_index': i, // is it necessary?
        'question': questions[i].question,
        'correct_answer':
            questions[i].answers[0], // by structure the first is the right one
        'user_answer': chosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(BuildContext context) {
    final int correct =
        summaryData
            .where((data) => data['correct_answer'] == data['user_answer'])
            .length;
    final int total = summaryData.length;

    return Container(
      margin: const EdgeInsets.all(40),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            "You ansered $correct out of $total questions correctly!",
            style: GoogleFonts.lato(
              color: const Color.fromARGB(255, 237, 223, 252),
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 30),
          QuestionSummary(summaryData: summaryData),
          const SizedBox(height: 30),
          TextButton.icon(
            onPressed: onRestart,

            style: TextButton.styleFrom(
              foregroundColor: Colors.white,
              textStyle: GoogleFonts.lato(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
              iconSize: 24,
            ),
            label: Text("Restart Quiz!"),
            icon: Icon(Icons.replay),
          ),
        ],
      ),
    );
  }
}
