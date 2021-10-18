function betterThanAverage(classPoints, yourPoints) {
  var avg = 0;
  for(var i = 0; i < classPoints.length; i++) {
    avg += classPoints[i];
  }
  avg /= classPoints.length;
  
  return avg < yourPoints ? true : false;
  // Your code here
}