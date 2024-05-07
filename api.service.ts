import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model'; 

@Injectable()
export class ApiService {
  private apiUrl = 'http://localhost:5000'; //  URL Flask

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/datos`);
  }

  agregarCliente(nuevoCliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agregar-cliente`, nuevoCliente);
  }
}