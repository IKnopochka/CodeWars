function remove (string) {  
  let newString;
  for (let i = string.length - 1; i > 0; i--) {
    if (string[i] !== '!') {
      newString = string.slice(0, i + 1);
      break;
    } 
  }
  return newString;
}