function rounding(num , precision) {
    if (precision > 15){
        precision = 15
    }
    let roundedNumber = parseFloat(num.toFixed(precision))
    console.log(roundedNumber);
} rounding(10.5,3)