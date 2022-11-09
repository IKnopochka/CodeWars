const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;


function numOfOpenLockers(n){

    return Math.floor(Math.sqrt(n))
}

function isPerfect(n) {
    // Your code here
    let sum = 1
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                sum += (i + n/i)
            }  
    }

    return sum === n && n > 1
}