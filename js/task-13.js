const AddLastAndFirstEl = (number) => {
    const lastNumber = number.toString()[number.toString().length -1]
    const firstNumber = number.toString()[0];

    return parseInt(lastNumber) + parseInt(firstNumber)
}

console.log(AddLastAndFirstEl(12009556))
console.log(AddLastAndFirstEl(5200955))