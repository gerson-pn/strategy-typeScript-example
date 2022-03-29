import Calculo from "../interfaces/calculo";

export default class Subtracao implements Calculo {
    calcular(valores: number[]): number {
        let divisao = valores[0]
        for (let index = 1; index < valores.length; index++) {
            divisao = divisao / valores[index]
        }
        return divisao
    }
}