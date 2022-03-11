import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ExportService } from 'app/services/export.service';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { CreditosService } from '../creditos.service';

@Component({
  selector: 'app-creditos-preaprobados',
  templateUrl: './creditos-preaprobados.component.html',
  styleUrls: ['./creditos-preaprobados.component.scss'],
  providers: [DatePipe]
})
export class CreditosPreaprobadosComponent implements OnInit {

  public page = 1;
  public page_size: any = 10;
  public collectionSize;
  public usuario;

  public listaCreditos;
  public infoExportar = [];

  constructor(
    private _creditosService: CreditosService,
    private _coreMenuService: CoreMenuService,
    private datePipe: DatePipe,
    private exportFile: ExportService,
  ) { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    this.obtenerListaCreditos();
  }

  transformarFecha(fecha) {
    let nuevaFecha = this.datePipe.transform(fecha, 'yyyy-MM-dd');
    return nuevaFecha;
  }

  exportarExcel() {
    this.infoExportar = [];
    const headers = ['Fecha cobro', 'Monto factura', 'Numero factura', 'Monto cobrado con Supermonedas', 'Nombre cliente', 'Cédula', 'WhatsApp'];
    if(this.listaCreditos){
      let objetoExportar = Object.create(this.listaCreditos);
      objetoExportar.forEach((row: any) => {
        const values = [];
        values.push(this.transformarFecha(row['fechaCobro']));
        values.push(row['montoTotalFactura']);
        values.push(row['numeroFactura']);
        values.push(row['montoSupermonedas']);
        values.push(row['nombreCompleto']);
        values.push(row['identificacion']);
        values.push(row['whatsapp']);
        this.infoExportar.push(values);
      });
    }
    const reportData = {
      title: 'Reporte de Cobros con Supermonedas',
      data: this.infoExportar,
      headers
    };

    this.exportFile.exportExcel(reportData);
  }

  obtenerListaCreditos() {
    this._creditosService.obtenerCreditos({
      page: this.page - 1, 
      page_size: this.page_size,
      empresaComercial_id: this.usuario.empresa._id,
      tipoCredito: "PreAprobado",
      estado: "Confirmado",
    }).subscribe(info => {
      this.listaCreditos = info.info;
      this.collectionSize = info.cont;
    });
  }

}
