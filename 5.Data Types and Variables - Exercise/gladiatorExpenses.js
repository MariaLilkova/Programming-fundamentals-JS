function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let looses = 0
    let loosesSecondTime = 0
    let sum = 0
    for (let i = 1; i <= lostFightCount; i++) {
        looses++

        if (looses % 2 === 0) {
            sum += helmetPrice
        }

        if (looses % 3 === 0) {
            sum += swordPrice
        }

        if (looses % 6 === 0) {
            loosesSecondTime++
            sum += shieldPrice
            if (loosesSecondTime % 2 === 0) {
                sum += armorPrice
            }

        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);


} gladiatorExpenses
    (23,
        12.50,
        21.50,
        40,
        200
    )