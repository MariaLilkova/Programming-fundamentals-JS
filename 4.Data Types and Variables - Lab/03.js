function solve(string, char, word) {
    // let rightWord = ""
    // for(let i = 0; i < string.length; i ++){
    //     let currentLetter = string[i]
    //     if (currentLetter === "_"){
    //         currentLetter = char
    //     }
    //     rightWord += currentLetter
    // }
    // if(rightWord === word){
    //     console.log("Matched");
    // } else{
    //     console.log('Not Matched');
    // }

    let result = string.replace('_', char)
    let output = result === word? 'Matced' : 'Not Matched'
    console.log(output);
}
solve(
    'Str_ng', 'I', 'Strong'
)