import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudesService } from './solicitudes.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  @ViewChild(NgbPagination) paginator: NgbPagination;
  public page = 1;
  public page_size: any = 10;
  public maxSize;
  public collectionSize;

  public listaSolicitudes: []=[];
  public nombresCompleto: string = "";
  public cedula: string = "";

  constructor(
    private _solicitudesCreditosService: SolicitudesService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.iniciarPaginador();
    this.obtenerListaSolicitudesCreditos();
  }

  obtenerListaSolicitudesCreditos() {
    this._solicitudesCreditosService.obtenerListaSolicitudesCreditos({
      page: this.page - 1, page_size: this.page_size, cedula: this.cedula, nombresCompleto: this.nombresCompleto
    }).subscribe(info => {
      this.listaSolicitudes = info.info;
      this.collectionSize = info.cont;
    });
  }

  iniciarPaginador() {
    this.paginator.pageChange.subscribe(() => {
      this.obtenerListaSolicitudesCreditos();
    });
  }

}
