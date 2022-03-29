import Calculo from "../interfaces/calculo";

export default class Subtracao implements Calculo {
    calcular(valores: number[]): number {
        let subtracao = valores[0]
        for (let index = 1; index < valores.length; index++) {
            subtracao = subtracao - valores[index]
        }
        return subtracao
    }
}