import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color.fromARGB(220, 26, 2, 80),
                Color.fromARGB(255, 45, 7, 98),
              ],
            ),
          ),
          child: const Center(child: Text('Hello World!')),
        ),
      ),
    ),
  );
}
