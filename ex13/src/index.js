function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

console.log(randomRangeNumber(1, 5));

module.exports = randomRangeNumber;