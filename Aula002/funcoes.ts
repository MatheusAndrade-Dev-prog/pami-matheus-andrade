//fuções de tipos
function saudacao(nome: string): string{
return`Ola ${nome}`;
}
console.log(saudacao('leandro'));

//interface para objetos Usuario
interface Usuario{
    nome:string,
    idade:number,
    email?:string //opcional
}

function exibirUsuario(usuario:Usuario): void{
console.log(`nome: ${usuario.nome}`);
console.log(`idade: ${usuario.idade}`);
}
exibirUsuario({nome: 'Marcos', idade: 22});

function ListarNomes(nome: string[]):void{
    nome.forEach(nome=>console.log(nome));

}
ListarNomes(['Ana','Bruno','Carlos']);