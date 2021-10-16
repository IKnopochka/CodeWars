function fixTheMeerkat(arr) {
 //your code here 
  var temp = arr[0];
  arr[0] = arr[2];
  arr[2] = temp;
  return arr;
}