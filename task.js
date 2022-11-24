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
  return beast[0] == dish[0] 
    ? beast[beast.length - 1] == dish[dish.length - 1] 
  ? true : false
    : false
//your function here
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker
}


function numberToPower(number, power){
  console.info(Math.log2(1024));
  // Code here
  let x = number
  for (let i = 1; i < power; i++) {
    
    x = x * number
  }
  return power === 0 ? 1 : x
}

function getSumOfDigits(integer) {
  let sum = 0;
  let digits = integer.toString();
  for(let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}


function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  // n = (n-1) + (n - 2)
  
  return n <= 1 
    ? 0 
    : n === 2 
      ? 1  
      : nthFibo(n - 1) + nthFibo(n - 2)
  
}