function sumDigits(num) {
    let numberToSting = num.toString()
    let result = 0
    for(let i = 0; i < numberToSting.length; i++){
        let numToNumber = Number(numberToSting[i])
        result += numToNumber
    }
    console.log(result);
    
}
sumDigits
(245678)