function subtracao(a, b) {
    return a - b;
}

console.log(subtracao(4, 2));

function soma(a, b = 0) {
    return a + b;
}

console.log(soma(3, 7));

let resultado = soma(8, 8);
console.log("Resultado: " + resultado);


