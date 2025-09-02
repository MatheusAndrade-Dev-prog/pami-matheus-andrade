//comentario
//javascript é uma linguagerm fracamente tipada!
var texto = 'ola' // aspas simples contêm sempre uma string
let texto2 = "Mundo"; // ponto e virgula é opcional
const texto3 = "!" // aspas  duplas também serve para string!

console.log(texto, texto2 + texto3)
//virgula concatena com espaço, enquanto o sinal de + deixa tudo junto

texto = 'hello' 
let msg = `${texto}, ${texto2} ${texto3}`
// use a crase junto de ${} para concatenar
//tambem
console.log(msg)

//texte3 = "teste"
//O exemplo acima mostra que é impossivel reatribuir um novo valor
// a numa constante 
let numero = 34
console.log(typeof numero) // o typeof define qual o tipo de variavel esta recebendo

let obj = { nome: "matheus", idade: 25 }
console.log(`Ola ${obj.nome} você tem ${obj.idade} anos`)
console.log(typeof obj)
// objeto é sempre um elemento chave/valor 

let arr = ['Matheus', 'F.','T.' , 'Andrade']
console.log(arr)
console.log(typeof arr)