function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let buff = ''
        for (let c = 1; c <= i; c++) {
            buff += `${i} `
        }
        console.log(buff);
    }
}
triangleOfNumbers(6)