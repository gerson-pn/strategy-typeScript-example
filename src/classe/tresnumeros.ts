import Entrada from "../interfaces/entrada";
import promptSync from "prompt-sync";

export default class TresNumeros implements Entrada {
    private prompt = promptSync()
    obterEntradas(): number[] {
        let numero1 = this.prompt(`Por favor, insira o numero 1: `)
        let numero2 = this.prompt(`Por favor, insira o numero 2: `)
        let numero3 = this.prompt(`Por favor, insira o numero 3: `)
        let numeros = [
            Number.parseFloat(numero1),
            Number.parseFloat(numero2),
            Number.parseFloat(numero3)
        ]
        return numeros
    }
}
