

/* let n = 134152;
function digitalRoot(n) {
    if (+n<10){
        return n
    }
return sum(n);
} */
console.log(digitalRoot(123321351))

function digitalRoot(n) {
    if (+n<10){
        return n
    }
    n = (n+"").split("")
    n = n.reduce(
        (accumulator, currentValue) => +accumulator + +currentValue,
        0
      );
    return digitalRoot(n);
}