import 'package:flutter/material.dart';
import 'package:quiz_app/data/quesitons.dart';
import 'package:quiz_app/question_summary.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({super.key, required this.chosenAnswers});

  final List<String> chosenAnswers;

  List<Map<String, Object>> getSummaryData() {
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
    List<Map<String, Object>> summaryData = getSummaryData();

    return Container(
      margin: const EdgeInsets.all(40),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text("You ansered X out of Y questions correctly!"),
          const SizedBox(height: 30),
          QuestionSummary(summaryData: summaryData),
          const SizedBox(height: 30),
          TextButton(onPressed: () {}, child: Text("Restart Quiz!")),
        ],
      ),
    );
  }
}
