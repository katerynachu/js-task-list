const checksameNumbers = (num1, num2) => {
    firstElNum1 = num1.toString()[0];
    firstElNum2 = num2.toString()[0];
    
    return firstElNum1 === firstElNum2 ? "Same numbers" : 'Not the same numbers';
}

console.log(checksameNumbers(233, 243))

console.log(checksameNumbers(12133, 2463))

console.log(checksameNumbers(4233,4243))