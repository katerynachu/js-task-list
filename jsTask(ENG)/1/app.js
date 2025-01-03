//* Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


function cloneArray(array){
    newArrCopy = [];

    for(let i = 0;i < array.length;i++){
        newArrCopy.push(array[i])
    }
    return newArrCopy;
}

console.log(cloneArray([1, 2, 4, 0]))