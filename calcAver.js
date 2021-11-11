function find_average(array) {
  // your code here
  return array.reduce((total, current) => {return total + current}) / array.length;
}