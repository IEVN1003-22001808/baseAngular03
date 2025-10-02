export class CalculadoraResistencias {

  public static calcularResistencia(
    banda1: number,
    banda2: number,
    multiplicador: number,
    tolerancia: number
  ) : {
    valor: number;
    valorMax: number;
    valorMin: number
  }
  {
    const valorBase = (banda1 * 10) + banda2;
    const valor = valorBase * multiplicador;
    const variacion = valor * tolerancia;
    const valorMax = valor + variacion;
    const valorMin = valor - variacion;

    return {
      valor,
      valorMax,
      valorMin
    };
  }

}
