const checkLengthStr = (str) => {
    return str.length > 1 ? str[str.length -2] : 'String to small'
}

console.log(checkLengthStr('cucmber'))
console.log(checkLengthStr('a'))