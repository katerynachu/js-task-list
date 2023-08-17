const checkFirstLetter = (str1, str2) => {
    const lettersFirstArr = str1.split('');
    const lettersSecondArr = str2.split('');

   return  lettersFirstArr[0] === lettersSecondArr[0] ? 'Yes same letters' : 'Nope,try another'
}

console.log(checkFirstLetter('sasas', 'asasas'))
console.log(checkFirstLetter('dsasas', 'dasasas'))