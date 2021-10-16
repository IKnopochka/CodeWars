function removeChar(str){
 //You got this!
  if (str.length > 2) {
    var part = str.substring(1, str.length - 1);
    return part;
  } else {
    return str;
  }
};