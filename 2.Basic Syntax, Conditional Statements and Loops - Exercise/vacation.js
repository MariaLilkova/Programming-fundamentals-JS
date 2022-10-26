function vacantion(people , type , day) {
    let price = 0

    if (day === 'Friday'){
        if (type === 'Students'){
            price = people * 8.45
            if (people >= 30){
                price *= 0.85
            }
        } else if (type === 'Business'){
            price = people * 10.90
            if (people >= 100){
                price = (people - 10) * 10.90
            }
        } else if (type === 'Regular'){
            price = people * 15
            if (people >= 10 && people <= 20){
                price *= 0.95
            }
        }
    } else if (day === 'Saturday'){
        if (type === 'Students'){
            price = people * 9.80
            if (people >= 30){
                price *= 0.85
            }
        } else if (type === 'Business'){
            price = people * 15.6
            if (people >= 100){
                price = (people - 10) * 15.6
            }
        } else if (type === 'Regular'){
            price = people * 20
            if (people >= 10 && people <= 20){
                price *= 0.95
            }
        }
    } else if (day === 'Sunday'){
        if (type === 'Students'){
            price = people * 10.46
            if (people >= 30){
                price *= 0.85
            }
        } else if (type === 'Business'){
            price = people * 16
            if (people >= 100){
                price = (people - 10) * 16
            }
        } else if (type === 'Regular'){
            price = people * 22.50
            if (people >= 10 && people <= 20){
                price *= 0.95
            }
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacantion
    (       40,
        "Regular",
        "Saturday"
        
    )