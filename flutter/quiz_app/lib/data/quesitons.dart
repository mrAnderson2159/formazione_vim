import 'package:quiz_app/models/quiz_question.dart';

const List<QuizQuestion> questions = [
  QuizQuestion('What are the main building blocks of Flutter UIs', [
    'Widgets',
    'Components',
    'Blocks',
    'Functions',
  ]),
  QuizQuestion('Which of these is not a Flutter layout widget?', [
    'Column',
    'Stack',
    'GridView',
    'Container',
  ]),
  QuizQuestion('Which company developed Flutter?', [
    'Apple',
    'Google',
    'Microsoft',
    'Facebook',
  ]),
  QuizQuestion('What programming language is used to code Flutter apps?', [
    'Java',
    'Kotlin',
    'Dart',
    'C#',
  ]),
  QuizQuestion(
    'Which of these is not an IDE that can be used for Flutter development?',
    ['Android Studio', 'Visual Studio Code', 'Xcode', 'Eclipse'],
  ),
  QuizQuestion('How is Flutter UIs built?', [
    'By combining widgets in a widget tree',
    'By combining functions in a function tree',
    'By combining components in a component tree',
    'By combining classes in a class tree',
  ]),
];
