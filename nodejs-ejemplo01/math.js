
const Math = {};

function add(x1, x2) {
    return x1 + x2;

}

function substract(x1, x2) {

    return x1 - x2;
}

function multiply(x1, x2) {

    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0){
        console.log('No se puede dividir entre 0');

    }   else {
            return x1 / x2;
    }
    
}

Math.add = add;
module.exports = Math;

//exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;


