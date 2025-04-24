// Desenha uma moldura em frase

const readline = require ('readline-sync');
const ch = '█';

function barra(qtde){
    for (let i=0 ; i<qtde+4 ; i++){
        process.stdout.write(ch)
    }
    console.log();
}
// fora da função
const frase = readline.question('\nDigite uma frase: ');

barra(frase.length);
console.log(`${ch} ${frase} ${ch}`);
barra(frase.length);

// const ch = '█';
// for (let i=0 ; i<frase.length+4 ; i++){
//     process.stdout.write(ch);
// }
// console.log(`\n${ch} ${frase} ${ch}`);
// for (let i=0 ; i<frase.length+4 ; i++){
//     process.stdout.write(ch);
// }

