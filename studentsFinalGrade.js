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

function canEscape(walls) {
    return walls.map((m, i) => m
        .map(e => e - i - 1))
        .flat()
        .find(f => f < 0.9) < 1 ? false : true
}

function geo_mean(nums, arith_mean) {
    const arithmeticSum = arith_mean * (nums.length + 1)
    const missingNum = nums.reduce((num, el) => num - el, arithmeticSum)
    nums.unshift(missingNum)
    const geometricMult = nums.reduce((mult,el) => mult*el, 1)
    const lngth = nums.length
    return Math.pow(geometricMult, 1/lngth)
}