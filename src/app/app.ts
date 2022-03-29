import promptSync from "prompt-sync";
import DoisNumeros from "../classe/doisnumeros";
import Hipotenusa from "../classe/hipotenusa";
import Soma from "../classe/soma";
import Subtracao from "../classe/subtracao";
import Processador from "./processador";

console.log(`Bem vindo a calculadora "estratégica"`);

let prompt = promptSync()
let execucao = true
let processador = new Processador()

while (execucao) {
    console.log(`Por favor, escolha um dos cálculos:`);
    console.log(`1 - soma`);
    console.log(`2 - subtração`);
    console.log(`3 - multiplicação`);
    console.log(`4 - divisão`);
    console.log(`5 - hipotenusa`);
    console.log(`0 - sair`);
    let opcao = prompt(`Qual opção você deseja: `)
    let resultado = undefined
    switch (opcao) {
        case '1':
            resultado = processador.processar(new Soma(), new DoisNumeros())
            console.log(`Resultado: ${resultado}`);
            break
        case '2':
            resultado = processador.processar(new Subtracao(), new DoisNumeros())
            console.log(`Resultado: ${resultado}`);
            break
        case '5':
            resultado = processador.processar(new Hipotenusa(), new DoisNumeros())
            console.log(`Resultado: ${resultado}`);
            break
        case '0':
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}