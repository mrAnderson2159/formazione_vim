import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestionSummary extends StatelessWidget {
  const QuestionSummary({super.key, required this.summaryData});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {
    final List<Container> data =
        summaryData
            .map(
              (data) => Container(
                margin: EdgeInsets.only(bottom: 20),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 30,
                      height: 30,
                      margin: const EdgeInsets.symmetric(horizontal: 10),
                      decoration: BoxDecoration(
                        color:
                            data['user_answer'] == data['correct_answer']
                                ? Colors.cyan[100]
                                : Colors.pink[400],
                        borderRadius: BorderRadius.circular(1000),
                      ),

                      child: Center(
                        child: Text(
                          ((data['question_index'] as int) + 1).toString(),
                          textAlign: TextAlign.center,
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              data['question'] as String,
                              style: GoogleFonts.robotoCondensed(
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 5),
                            Text(
                              data['user_answer'] as String,
                              style: GoogleFonts.robotoCondensed(
                                color: Colors.purple[200],
                                fontSize: 18,
                              ),
                            ),
                            Text(
                              data['correct_answer'] as String,
                              style: GoogleFonts.robotoCondensed(
                                color: Colors.cyan[200],
                                fontSize: 18,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            )
            .toList();

    return SizedBox(
      height: 400,
      child: SingleChildScrollView(child: Column(children: data)),
    );
  }
}
