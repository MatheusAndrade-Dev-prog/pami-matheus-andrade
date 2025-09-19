//fuções de tipos
function saudacao(nome) {
    return "Ola ".concat(nome);
}
console.log(saudacao('leandro'));
function exibirUsuario(usuario) {
    console.log("nome: ".concat(usuario.nome));
    console.log("idade: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
function ListarNomes(nome) {
    nome.forEach(function (nome) { return console.log(nome); });
}
ListarNomes(['Ana', 'Bruno', 'Carlos']);
