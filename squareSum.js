function squareSum(numbers){
  return numbers.reduce((sum, el) => sum + Math.pow(el, 2), 0);
}