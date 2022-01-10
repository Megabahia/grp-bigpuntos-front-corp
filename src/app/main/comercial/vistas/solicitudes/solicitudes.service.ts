import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private _httpClient: HttpClient) { }

  obtenerListaSolicitudesCreditos(datos) {
    return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPreaprobados/list/corp/`, datos);
  }
  obtenerInformacionPersona(datos){
    return this._httpClient.post<any>(`${environment.apiUrl}/personas/personas/listOne/cedula/`, datos);
  }
  obtenerInformacionPersonaID(id){
    return this._httpClient.get<any>(`${environment.apiUrl}/personas/personas/listOne/${id}`);
  }
  crearNotaPedido(datos){
    return this._httpClient.post<any>(`${environment.apiUrl}/corp/notasPedidos/create/`, datos);
  }
}
