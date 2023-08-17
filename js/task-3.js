const numbers = [];
const oddCount = n => {

    for (let i = 1; i < n; i++){
        if (i % 2 !== 0) {
            numbers.push(i)
        }
    }
        return numbers;
}
console.log(oddCount(7))
