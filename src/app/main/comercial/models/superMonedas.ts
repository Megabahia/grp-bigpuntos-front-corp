export class SolicitudesCredito {
    fecha: Date;
    nombres: string;
    apellidos: string;
    valor: number;
    descripcion: string;
    estado: string;
    observaciones: string;
}
export class CobroConCodigo {
    id: string;
    identificacion: string;
    autorizacion: string;
    nombres: string;
    apellidos: string;
    fechaCobro: string;
    codigoPreautorizacion: string;
    montoTotalFactura: number;
    montoSupermonedas: number;
    codigoCobro: string;
}
export class GenerarCobro {
    user_id: string;
    empresa_id: string;
    codigoCobro: string;
    montoTotalFactura: number;
    montoSupermonedas: number;
}