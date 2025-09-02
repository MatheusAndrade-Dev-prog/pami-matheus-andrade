let n1 = 2;
let n2 = 5;
/* pascal case = NomeVariavel (primeira Letra da palavra é sempre maiuscula)
Camel Case = nomeVariavel (primeira letra da palavra é minuscula e o restante começa com maiuscula)
Kabab Case = nome-variavel (tanto faz se começa com maiuscula ou minuscula, o importante é separar por hífen)
Snake Case = nome_variavel (tanto faz se começa com maiuscula ou minuscula, o importante é separar por underline)
*/

function Soma() {
   console.log(25 + 12);
}

Soma();
//função sinmples que não recebe parêmetros

function SomaComPametros(v1, v2) {
   let resutado = v1 + v2;
   return resutado;
}

console.log(SomaComPametros(n1, n2));
