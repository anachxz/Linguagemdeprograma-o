const peso1 = 1.0;
const peso2 = 2.1;
console.log(peso1);
console.log(Number.isInteger(peso1));
console.log(peso2);
console.log(Number.isInteger(peso2));
const avaliacao1 = 9.45
const avaliacao2 = 6.456
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(1)) //toFixed fixa a quantidade de casas após a vírgula
console.log(media.toString())
console.log(typeof media)
//number com n minúsculo é um tipo e com N maiúsculo é uma função
console.log(typeof Number)