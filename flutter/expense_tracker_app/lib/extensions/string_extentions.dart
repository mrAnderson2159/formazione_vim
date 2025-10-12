// This is just a very cool feature I asked to chatGPT, so like String.prototype in Javascript...

extension StringCasingExtension on String {
  String capitalize() {
    return isEmpty ? this : this[0].toUpperCase() + substring(1);
  }

  String capitalizeAll() {
    return split(' ').map((w) => w.capitalize()).join(' ');
  }
}
