import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAdministrador } from '../modelos/administrador.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url = 'http://localhost:3000';
  token: String = '';
  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerAdmin(): Observable<ModeloAdministrador[]>{
    return this.http.get<ModeloAdministrador[]>(`${this.url}/administradors`);
  }

  ObtenerAdminId(id: string): Observable<ModeloAdministrador>{
    return this.http.get<ModeloAdministrador>(`${this.url}/administradors/${id}`);
  }

  CrearAdmin(administardor: ModeloAdministrador): Observable<ModeloAdministrador>{
    return this.http.post<ModeloAdministrador>(`${this.url}/administradors`, administardor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarAdmin(administardor: ModeloAdministrador): Observable<ModeloAdministrador>{
    return this.http.put<ModeloAdministrador>(`${this.url}/administradors/${administardor.idAdministrador}`, administardor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarAdmin(id: string): Observable<any>{
    return this.http.delete(`${this.url}/administradors/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
