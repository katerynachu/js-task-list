// Найдите числа, которые делятся на заданное число
// Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
const textContentEl = document.querySelector('.text');
const numberRight = [];
const divisibleBy = (numbers, divisor) => {

    for (const number of numbers) {
        if (number % divisor === 0) {
            numberRight.push(number)
        }
    }
    return numberRight;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

