import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DocumentosHabilitantesService} from './documentos-habilitantes.service';

@Component({
    selector: 'app-documentos-habilitantes',
    templateUrl: './documentos-habilitantes.component.html',
    styleUrls: ['./documentos-habilitantes.component.scss']
})
export class DocumentosHabilitantesComponent implements OnInit {

    public idCredito;
    public credito;

    public documentos = [
        {'label': 'Identificacion', 'valor': false},
        {'label': 'Foto Carnet', 'valor': false},
        {'label': 'Ruc', 'valor': false},
        {'label': 'Papeleta votación Representante Legal ', 'valor': false},
        {'label': 'Identificacion conyuge', 'valor': false},
        {'label': 'Papeleta votacion conyuge', 'valor': false},
        {'label': 'Planilla luz Negocio', 'valor': false},
        {'label': 'Planilla luz Domicilio', 'valor': false},
        {'label': '3 Copias de Facturas de Ventas del negocio de los últimos 2 meses', 'valor': false},
        {'label': '3 facturas de Compra del negocio de los últimos 2 meses', 'valor': false},
        {'label': 'Facturas pendiente de pago', 'valor': false},
        {'label': 'Justificación otros inresos mensuales ', 'valor': false},
        {'label': 'Matricula vehiculo', 'valor': false},
        {'label': 'Copia de pago impuesto predial o copia de escrituras', 'valor': false},
        {'label': 'Registro de Referencias Familiares y Comerciales.', 'valor': false},
        {'label': 'Buro credito', 'valor': false},
    ];

    constructor(
        private _router: Router,
        private route: ActivatedRoute,
        private _consultaCreditosService: DocumentosHabilitantesService,
    ) {
    }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => this.idCredito = params['id']);
        this._consultaCreditosService.obtenerCredito(this.idCredito).subscribe((info) => {
            console.log('info', info);
            this.credito = info;

        });

    }

    continuar() {
        this._router.navigate(['/comercial/envio-doocumentos']);
    }
}
