/* Map */

/* [1, 2, 3] = [11, 12, 13] */


let ar1 = [1, 2, 3]

let ar2 = ar1.map((value, i) =>{
    return value + 10
})

console.log(ar2);
