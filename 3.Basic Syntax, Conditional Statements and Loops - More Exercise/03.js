function solve (year, month, day){
    let date = new Date(year, month - 1, day + 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`);
}
solve(2016, 9, 30)