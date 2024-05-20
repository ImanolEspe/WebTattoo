import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000'; // URL Flask
  private isLogged:boolean = false;
  
  constructor(private http: HttpClient) { }

  agregarCliente(nuevoCliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agregar-cliente`, nuevoCliente);
  }

  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/datos`);
  }
  login(value:boolean){
    this.isLogged=value;
  }
  getIsLogged(){
    return this.isLogged
  }
}