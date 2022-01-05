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
}
