function amazingNumbers(num) {
    let numToSting = String(num)
    let sum = 0
    for (let i = 0; i < numToSting.length; i++){
        let currentNum = Number(numToSting[i])
        sum += currentNum
       
    }
   let sumToString = String(sum)
   let isAmazing = false
    for (let i = 0; i < sumToString.length; i++){
        
        if (Number(sumToString[i])=== 9){
            isAmazing = true
            console.log(`${num} Amazing? ${isAmazing}`);
            break;
        } else {
            console.log(`${num} Amazing? ${isAmazing}`);
            break;
        }
    }
    
}
amazingNumbers
(1233)