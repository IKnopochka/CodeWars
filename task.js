function arrAdder(arr) {
    let newArray = []
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
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

function rowSumOddNumbers(n) {

    let startingNumber = 0;
    if (n > 2) {
        startingNumber = n * (n - 1) + 1
    } else if (n === 2) {
        startingNumber = n + n - 1
    } else {
        startingNumber = 1
    }

    let sum = startingNumber;

    if (sum === 1) {
        return 1
    } else {
        for (let i = n; i > 1; i--) {
            sum = sum + startingNumber + 2
            startingNumber = startingNumber + 2
        }
        return sum
    }
}

function reverseWords(str) {
    return str.split(' ').reverse().join(" "); // reverse those words
}

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}


function feast(beast, dish) {
  if(beast[0] === dish[0]){
    if(beast[beast.length - 1] === dish[dish.length - 1]) return true
    return false
  }
//your function here
}