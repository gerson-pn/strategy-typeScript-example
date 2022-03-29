import Entrada from "../interfaces/entrada";
import promptSync from "prompt-sync";

export default class DoisNumeros implements Entrada {
    private prompt = promptSync()
    obterEntradas(): number[] {
        let numero1 = this.prompt(`Por favor, insira o numero 1: `)
        let numero2 = this.prompt(`Por favor, insira o numero 2: `)
        let numeros = [Number.parseFloat(numero1), Number.parseFloat(numero2)]
        return numeros
    }
}