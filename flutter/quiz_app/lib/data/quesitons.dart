import 'package:quiz_app/models/quiz_question.dart';

/*
By structure the first answer is always the correct one
*/

const List<QuizQuestion> questions = [
  QuizQuestion('What are the main building blocks of Flutter UIs', [
    'Widgets',
    'Components',
    'Blocks',
    'Functions',
  ]),
  QuizQuestion('Which of these is not a Flutter layout widget?', [
    'Container',
    'Column',
    'Stack',
    'GridView',
  ]),
  QuizQuestion('Which company developed Flutter?', [
    'Google',
    'Apple',
    'Microsoft',
    'Facebook',
  ]),
  QuizQuestion('What programming language is used to code Flutter apps?', [
    'Dart',
    'Java',
    'Kotlin',
    'C#',
  ]),
  QuizQuestion(
    'Which of these is not an IDE that can be used for Flutter development?',
    ['Eclipse', 'Android Studio', 'Visual Studio Code', 'Xcode'],
  ),
  QuizQuestion('How is Flutter UIs built?', [
    'By combining widgets in a widget tree',
    'By combining functions in a function tree',
    'By combining components in a component tree',
    'By combining classes in a class tree',
  ]),
];
