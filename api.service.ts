import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model'; // Asegúrate de importar tu modelo de cliente

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000'; // La URL de tu backend Flask

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/datos`);
  }

  agregarCliente(nuevoCliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agregar-cliente`, nuevoCliente);
  }
}