const nomeCompleto = 'Ana Clara Bauer';
function gerarEmail(nome) {
  const partes = nome.toLowerCase().split(' ');
  const primeiro = partes[0];
  const ultimo = partes[partes.length - 1];
  return `${primeiro}.${ultimo}@facens.br`;
}
console.log('\n--- Ex 4: E-mail Facens ---');
console.log(gerarEmail(nomeCompleto));