export class CobroMonedas {
    identificacion: string;
    codigoCobro: string;
    monto: string;
    correo: string;
}
export class CobroConCodigo {
    id: string;
    identificacion: string;
    nombres: string;
    apellidos: string;
    fechaCobro: string;
}
export class GenerarCobro{
    montoTotalFactura:number;
    montoSupermonedas:number;
}