function rightPlace(string, char, word) {
    // console.log(string.replace("_", char)=== word? "Matched":"Not Matched");
    let res = ""
    for (let i = 0; i < string.length; i++){
        let currentChar = string[i]
        if (currentChar === "_"){
            res += char 
        } else {
            res += currentChar
        }
    }
    if (res === word){
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace
('Str_ng', 'I', 'Strong')