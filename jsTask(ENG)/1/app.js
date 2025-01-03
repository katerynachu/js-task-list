//* Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


function cloneArray(array) {
    newArrCopy = [];

    for (let i = 0; i < array.length; i++) {
        newArrCopy.push(array[i])
    }
    return newArrCopy;
}

// console.log(cloneArray([1, 2, 4, 0]))
function cloneArray2(array) {
    // Using the slice method to create a shallow copy of the input array
    return array.slice(0)
}

function cloneArray3(array) {
    //ES6 introduced the spread operator (...), which provides probably the easiest and most common way to create a shallow clone of an array.
    let arrayCopy = [...array]
}

function cloneArray4(array) {
    //Array.from() has a very powerful API that can be used for many different things, including creating a copy of an array.
    let arrayCopy = Array.from(array)
}




//*  First Elements of Array
//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function firstElementOfArray(array, index = 0) {
    let elements = [];
    if (index < 0) {
        return [];
    }

    if (index === 0) {
        return array[0]
    }
    if (index > 0) {
        for (let i = 0; i < index && i < array.length; i++) {
            elements.push(array[i]);

        }
        return elements;
    }
    return null;
}


// console.log(firstElementOfArray([7, 9, 0, -2]))
// console.log(firstElementOfArray([8, 9, 0, -2], 3))

const first = (array, n) => {
    // Check if the input array is null, return undefined if true
    if (array == null)
      return undefined;
  
    // Check if the value of n is null, return the first element of the array if true
    if (n == null)
      return array[0];
  
    // Check if the value of n is negative, return an empty array if true
    if (n < 0)
      return [];
  
    // Use the slice method to get the first n elements of the array
    return array.slice(0, n);
  };


