function strCount(str, letter){  
  //code here
  var count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      count++; 
    }
  }
  return count;
}