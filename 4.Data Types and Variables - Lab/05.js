function solve(number) {
    let numberToSting = number.toString()
    let result = 0
    for (let i = 0; i < numberToSting.length; i++){
        let num = Number(numberToSting[i])
        result += num
    }
    let isAmazing = false
    let resultToSting = result.toString()
    for(let i = 0; i <resultToSting.length; i++){
        let currentDigit = Number(resultToSting[i])
        if (currentDigit === 9){
            isAmazing = true
            break;
        }
    }
    let amazing = isAmazing? 'True' : 'False'
        console.log(`${number} Amazing? ${amazing}`);
}solve
(1233)