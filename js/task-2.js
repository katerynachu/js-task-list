const twiceAsOld = (dadYearsOld, sonYearsOld) => {

    if (dadYearsOld / sonYearsOld >= 2) {

        return `${dadYearsOld - sonYearsOld * 2} years ago father was twice older then son`;
    }
    
    return `After ${sonYearsOld * 2 - dadYearsOld} years father wiil twice older then son`;
    
}
console.log(twiceAsOld(36, 7))

console.log(twiceAsOld(50, 30))


