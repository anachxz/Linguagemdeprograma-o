const contarVogais = (txt) => {
    const vogais = "aeiou";
    return txt.split("").filter(letra => vogais.includes(letra)).length;
};
console.log("Ex 8:", contarVogais("programacao"));