const checksNumber = (num1, num2) => {
    return num1 % num2 === 0 ? "Everything ok " : "Nothing ok";
}

console.log(checksNumber(10, 2))
console.log(checksNumber(7,4))