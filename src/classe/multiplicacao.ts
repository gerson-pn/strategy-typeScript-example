import Calculo from "../interfaces/calculo";

export default class Multiplicacao implements Calculo {
    calcular(valores: number[]): number {
        let soma = 1
        valores.forEach(valor => {
            soma = soma * valor
        })
        return soma
    }
}