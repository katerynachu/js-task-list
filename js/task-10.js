const checkLastLetter = (str) => {
    const letters = str.split('');
    
    return letters[letters.length - 1] === 'ь' ? letters[letters.length - 2] : letters[letters.length - 1];
}

console.log(checkLastLetter('собака'))
console.log(checkLastLetter('червь'))