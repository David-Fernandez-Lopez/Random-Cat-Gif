
const factShortener = (fact) => {
    
    const factArray = fact.split(' ')

    const shortenedFact = factArray[0] + ' ' + factArray[1] + ' ' + factArray[2]
    
    return shortenedFact
    
}


module.exports = factShortener 