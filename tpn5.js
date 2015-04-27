var arr = ["quiero", "mi", "regalo"]
var arr1 = "testing string";/*variable de testeo*/
var rev = [];
if (Array.isArray(arr1)) {
    for (i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
        console.log(true);
        rev;
    }
} else {
    console.log(false);
    console.log("el valor no es un Array neandertal.");
}