/*
Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e 
armazene na variável y.Mostre esses números. Em seguida, faça com que x passe 
a ter o valor de , e que y passe a ter o valor de x.
Nome Aluno:Dandara
*/

let teclado = require (`prompt-sync`)();
let x: number = parseFloat(teclado(`Digite o valor de x: `));
let y: number = parseFloat(teclado(`Digite o valor de y: `));
let z: number = 0;

console.log(`O valor de x é ${x} e o valor de y é ${y}`);

z = x;
x = y;
y = z;
console.log(`O valor de x é ${x} e o valor de y é ${z}`);













