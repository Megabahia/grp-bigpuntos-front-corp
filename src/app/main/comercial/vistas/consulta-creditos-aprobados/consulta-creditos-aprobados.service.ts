import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConsultaCreditosAprobadosService {

    constructor(private _httpClient: HttpClient) {
    }

    generarCodigo(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPersonas/generar/codigo/creditoAprobado`, datos);
    }
    valdiar(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPersonas/validar/codigo/creditoAprobado`, datos);
    }
    obtenerCredito(id) {
        return this._httpClient.get<any>(`${environment.apiUrl}/corp/creditoPersonas/listOne/${id}`);
    }
}
