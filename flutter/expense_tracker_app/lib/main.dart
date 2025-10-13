import 'package:flutter/material.dart';
import 'package:expense_tracker_app/widgets/expenses.dart';

// A color scheme provides a set of colors that can be used to design your app.
// Using the .fromSeed() method allows you to choose a seed color from which
// all the other colors will be derived.
// Here, the variable name starts with a 'k', which is a
// common convention in Dart to indicate global variables.
ColorScheme kColorScheme = ColorScheme.fromSeed(
  seedColor: const Color.fromARGB(255, 96, 59, 181),
);

void main() {
  runApp(
    MaterialApp(
      // Theme objects such as ThemeData or AppBarTheme are immutable
      // and contain a wide variety of properties. When we want to
      // customize our theme, we avoid building an entire theme from
      // scratch because that would be unnecessarily time-consuming.
      // Instead, we use the .copyWith() method, which creates a copy
      // of the existing theme object with the properties we want to
      // customize overridden.
      theme: ThemeData().copyWith(
        colorScheme: kColorScheme,
        appBarTheme: const AppBarTheme().copyWith(
          backgroundColor: kColorScheme.onPrimaryContainer,
          foregroundColor: kColorScheme.primaryContainer,
        ),
        cardTheme: const CardThemeData().copyWith(
          color: kColorScheme.secondaryContainer,
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        ),
        // At the time of writing (Dart 3.9.x), some theme objects behave
        // slightly differently from others. In some cases, you might find
        // the pattern ThemeObject.copyWith(...), while in others you may
        // see ThemeObject(style: Object.styleFrom(...)), as is the case
        // with the ElevatedButton widget. We encourage you to always
        // consult the official documentation:
        // https://api.flutter.dev/flutter/material/ThemeData-class.html
        // https://api.flutter.dev/flutter/material/ColorScheme-class.html
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: kColorScheme.primaryContainer,
          ),
        ),
        // Every Flutter app includes a set of predefined text styles provided
        // by ThemeData. These text styles can be accessed through the .textTheme
        // property. This allows, for example, the modification of the titleLarge
        // property, which defines the default style for the AppBar title.
        // In this case, we replace the titleLarge property with a new TextStyle.
        //
        // Please note that the color is not applied to the AppBar title,
        // because a color style for this property was already defined
        // in a more specific way (AppBarTheme). Just like in CSS, a more specific
        // rule always overrides a more generic one — in this case,
        // ThemeData.AppBarTheme.foregroundColor (more specific) overrides
        // ThemeData.textTheme.titleLarge (more generic).
        //
        // ThemeData
        // ├── textTheme.titleLarge        ← generic style
        // └── appBarTheme.foregroundColor ← overrides it
        textTheme: ThemeData().textTheme.copyWith(
          titleLarge: TextStyle(
            fontWeight: FontWeight.bold,
            color: kColorScheme.onSecondaryContainer,
            fontSize: 16,
          ),
        ),
      ),
      home: Expenses(),
    ),
  );
}
