import Calculo from "../interfaces/calculo";

export default class Soma implements Calculo {
    calcular(valores: number[]): number {
        let soma = 0
        valores.forEach(valor => {
            soma = soma + valor
        })
        return soma
    }
}