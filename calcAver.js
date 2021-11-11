function find_average(array) {
  // your code here
  if(array.length === 0) {
    return 0;
  } else {
    return array.reduce((total, current) => {return total + current}) / array.length;
  }
}