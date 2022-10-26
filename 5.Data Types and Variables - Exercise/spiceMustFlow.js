function spiceMustFlow(startingYield) {
    let daysCounter = 0
    let spiceExtracted = 0
    while(startingYield >= 100){
        daysCounter ++
        spiceExtracted += startingYield - 26 
        startingYield -= 10
    }
    console.log(daysCounter);
    if (daysCounter !== 0){
        console.log(spiceExtracted - 26);
    } else {
        console.log(spiceExtracted);
    }
}
spiceMustFlow
(111)