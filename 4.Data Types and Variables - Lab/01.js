function solve(params) {
    let param = typeof(params)
    console.log(param);
    if (param ==="string" || param === "number"){
        console.log(params);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
solve(
    null
)