function pad_with_zeroes(number) {
  var my_string = '' + number;
  while (my_string.length < 8) {
    my_string = '0' + my_string;
  }
  return my_string;
}

function bitwiseAND(n1, n2) {
  const string1 = pad_with_zeroes(n1.toString(2));
  const string2 = pad_with_zeroes(n2.toString(2));
  // console.log(string1, string2);
  let returnString = '';
  for (let i = 0; i < 8; i++) {
    // console.log(string1[i], string2[i]);
    if (string1[i] === string2[i]) {
      returnString += string1[i];
    } else {
      returnString += 0;
    }
  }

  return returnString;
}

console.log(bitwiseAND(7, 12));
