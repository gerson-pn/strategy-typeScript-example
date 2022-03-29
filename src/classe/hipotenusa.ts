import Calculo from "../interfaces/calculo";

export default class Hipotenusa implements Calculo {
    calcular(valores: number[]): number {
        let hipotenusa = Math.sqrt(Math.pow(valores[0], 2) + Math.pow(valores[1], 2))
        return hipotenusa
    }
}