function arrAdder(arr) {
  let newArray = []
  for (let i = 0; i < arr[0].length; i++) {
    for ( let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== '') {
        newArray.push(arr[j][i])
      } else {
        break
      }
    }
    newArray.push([' '])
  }
  let result = newArray.join('').trim()
  return result;
}

