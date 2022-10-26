function solve(num) {
    for(let i = 0; i < num; i++){

        let letter = String.fromCharCode(97+num)
        let current = letter[i]
        for(let i = 0; i < num; i++){
             letter = String.fromCharCode(97+num)
              current = letter[i]
            for(let i = 0; i < num; i++){
                 letter = String.fromCharCode(97+num)
                 current = letter[i]
                console.log(current)
            }
        }
    }
}
solve(
   2
)