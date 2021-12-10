import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVendedor } from '../modelos/vendedor.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  url = 'http://localhost:3000';
  token: String = '';
  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerVendedor(): Observable<ModeloVendedor[]>{
    return this.http.get<ModeloVendedor[]>(`${this.url}/vendedors`);
  }

  ObtenerVendedorId(id: string): Observable<ModeloVendedor>{
    return this.http.get<ModeloVendedor>(`${this.url}/vendedors/${id}`);
  }

  CrearVendedor(vendedor: ModeloVendedor): Observable<ModeloVendedor>{
    return this.http.post<ModeloVendedor>(`${this.url}/vendedors`, vendedor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarVendedor(vendedor: ModeloVendedor): Observable<ModeloVendedor>{
    return this.http.put<ModeloVendedor>(`${this.url}/vendedors/${vendedor.idVendedor}`, vendedor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarVendedor(id: string): Observable<any>{
    return this.http.delete(`${this.url}/vendedors/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
