function firstNonConsecutive (arr) {
  var previous = arr[0];
  var first = undefined;
  for (var i = 1; i < arr.length; i++) {
    if (previous + 1 !== arr[i]) {
      first = arr[i];
      break;
    }
    previous++;
  }
  return first !== undefined ? first : null;

}