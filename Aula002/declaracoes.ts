//declarações de variaveis
let nome: string = 'joao';
let idade: number = 25;
let estaAtivo: boolean = true;

//arrays 
let numeros: number[] =[1,2,3,4,5];
let nomes: string[] = ['Ana' , 'Bruno','Carlos'];
let misto: (string|number) [] = ['Ana', 25, 'Carlos' , 30];
let misto2: Array<string| number> = ['Ana', 25, 'Carlos' , 30];

//Tuplas 
let pessoa: [string, number] = ['Maria' , 25];

//union Types 
let id: number| string =123;
id = 'ABC123';

//Interfaces - são usadas para definir estreutura de objetos
interface usuario{
    nome: string,
    idade: number,
    email?:string; //opcional
}

//Utilizar elas fica assim
let novo_usuario: usuario = {
    nome:'Amanda',
    idade: 18
};