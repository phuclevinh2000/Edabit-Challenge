function detectWord(str) {
  let secrectValue = '';
  for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) secrectValue += str[i];
  }

  return secrectValue;
}
