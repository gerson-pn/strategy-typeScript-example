import Calculo from "../interfaces/calculo";
import Entrada from "../interfaces/entrada";

export default class Processador {
    public processar(calculo: Calculo, entrada: Entrada): Number{
        let numeros = entrada.obterEntradas()
        let resultado = calculo.calcular(numeros)
        return resultado
    }
}