function whichIsLarger(f, g) {
  if (f() > g()) {
    return 'f';
  } else if (f() === g()) {
    return 'neither';
  } else return 'g';
}
