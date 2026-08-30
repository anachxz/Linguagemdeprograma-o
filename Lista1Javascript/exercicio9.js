const validarEmail = (email) => {
    const [usuario, dominio] = email.split("@");
    return email.split("@").length === 2 && dominio?.includes(".");
};
console.log("Ex 9:", validarEmail("teste@exemplo.com"));