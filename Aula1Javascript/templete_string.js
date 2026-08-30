let nome = "Edson"
let concatenacao = "Olá "+ nome + "!"
console.log(concatenacao)
//template string
let template = `
Olá
${nome}!`
console.log(template)
//expressões
console.log(`1 + 1 = ${1 + 1}`)
//string up(string texto){ return texto.toUpperCase();}
const up = texto => texto.toUpperCase();
console.log(`Ei! ${up('Cuidado')}!`)