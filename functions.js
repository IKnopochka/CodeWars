const areaOrPerimeter = function(l , w) {
  // Return your answer
  
  return l !== w ? 2*l + 2* w : l * w;
};

// Write the "square"-function here
function square(arr) {
  return arr*arr;
};


function humanReadable (seconds) {
  let HH = Math.floor(seconds / 3600);
  let MM = Math.floor((seconds - HH * 3600) / 60)
  let SS = seconds - HH * 3600 - MM * 60
  
  HH = `${HH}`.length < 2 ? `0${HH}` : HH
  MM = `${MM}`.length < 2 ? `0${MM}` : MM
  SS = `${SS}`.length < 2 ? `0${SS}` : SS
  
  let result= `${HH}:${MM}:${SS}`
  
  return result;
}

function wordsToMarks(string){
  
  let sum = 0;
  
  for (let i = 0; i < string.length; i++) {
    sum += (string.charCodeAt(i) - 96)
  }
  
  return sum
}