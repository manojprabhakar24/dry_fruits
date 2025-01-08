import 'package:flutter/foundation.dart';

class ThemeProvider with ChangeNotifier {
  // Since we're only using the light theme, no need to store or manage the theme state.
  bool get darkTheme => false;  // Always return false since you only want to use the light theme.

// No need for SharedPreferences anymore, so we remove that dependency.
}
