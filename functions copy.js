function well(x){
  let num = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i] === 'good'){
      num++;
    }
  }
  
  if(num > 2) {
    return 'I smell a series!';
  } else if (num > 0) {
    return 'Publish!';
  } else {
    return 'Fail!'
  } 
  
}

