import 'package:flutter/material.dart';
import 'package:quiz_app/quiz.dart';

void main() {
  // In order to configure an app where you can switch between
  // different screens, we need to lift the state up.
  // To do so, we moved the MaterialApp widget into a new StatefulWidget
  runApp(const Quiz());
}
