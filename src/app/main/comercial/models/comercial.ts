export class NotaPedido {
    id: string;
    numeroFactura: string;
    fecha: string;
    tipoIdentificacion: string;
    identificacion: string;
    razonSocial: string;
    direccion: string;
    telefono: string;
    correo: string;
    nombreVendedor: string;
    subTotal: number;
    descuento: number;
    iva: number;
    total: number;
    canal: string;
    numeroProductosComprados: number;
    user_id: string;
    detalles: Array<any>;
    empresaComercial: string;
    credito: string;
}
export class Iva {
    created_at: string;
    descripcion: string;
    id: string;
    idPadre: string;
    nombre: string;
    tipo: string;
    tipoVariable: string;
    updated_at: string;
    valor: number;
}