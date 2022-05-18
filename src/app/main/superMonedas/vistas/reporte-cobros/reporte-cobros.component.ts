import {Component, OnInit} from '@angular/core';
import {ReporteCobrosService} from './reporte-cobros.service';
import {CoreMenuService} from '../../../../../@core/components/core-menu/core-menu.service';
import {DatePipe} from '@angular/common';
import {ExportService} from '../../../../services/export.service';

@Component({
    selector: 'app-reporte-cobros',
    templateUrl: './reporte-cobros.component.html',
    styleUrls: ['./reporte-cobros.component.scss'],
    providers: [DatePipe]
})
export class ReporteCobrosComponent implements OnInit {

    public page = 1;
    public page_size: any = 10;
    public collectionSize;
    public usuario;

    public cobros;
    public infoExportar = [];

    constructor(
        private _reporteCobrosService: ReporteCobrosService,
        private _coreMenuService: CoreMenuService,
        private datePipe: DatePipe,
        private exportFile: ExportService,
    ) {
        this.usuario = this._coreMenuService.grpCorpUser;
    }

    ngOnInit(): void {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        this.obtenerListaPagos();
    }

    transformarFecha(fecha) {
        return this.datePipe.transform(fecha, 'yyyy-MM-dd');
    }

    exportarExcel() {
        this.infoExportar = [];
        const headers = ['FECHA DE COBRO', 'NUMERO DE FACTURA', 'MONTO DE FACTURA', 'MONTO EN BP', 'NOMBRE DEL CLIENTE',
            'IDENTIFICACIÓN DEL CLIENTE', 'CORREO DEL CLIENTE'];
        if (this.cobros) {
            const objetoExportar = Object.create(this.cobros);
            objetoExportar.forEach((row: any) => {
                const values = [];
                values.push(this.transformarFecha(row['created_at']));
                values.push(row['_id']);
                values.push(row['montoTotalFactura']);
                values.push(row['montoSupermonedas']);
                values.push(row['nombres'] + ' ' + row['apellidos']);
                values.push(row['identificacion']);
                values.push(row['email']);
                this.infoExportar.push(values);
            });
        }
        const reportData = {
            title: 'Reporte de Cobros con BP',
            data: this.infoExportar,
            headers
        };

        this.exportFile.exportExcel(reportData);
    }

    obtenerListaPagos() {
        this._reporteCobrosService.obtenerListaPagos({
            page: this.page - 1, page_size: this.page_size, empresa_id: this.usuario.empresa._id
        }).subscribe(info => {
            this.cobros = info.info;
            this.collectionSize = info.cont;
        });
    }

}
