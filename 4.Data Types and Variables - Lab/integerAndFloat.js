function integerAndFloat(first, second, third) {
    let sum = first + second + third
    let type =''
    if (sum % 1 === 0){
        type = 'Integer'
    } else {
        type = 'Float'
    }
    console.log(`${sum} - ${type}`);

    
}
integerAndFloat
(9, 100, 1.1)