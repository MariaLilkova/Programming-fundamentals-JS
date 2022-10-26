function echo(params) {
    let type = typeof(params)
    if (type == "string" || type == "number"){
        console.log(type);
        console.log(params);
    } else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }
}
echo (null)