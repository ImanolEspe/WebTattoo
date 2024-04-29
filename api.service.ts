import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/datos'; // La URL de tu API Flask

  constructor(private http: HttpClient) { }

   obtenerClientes(): Observable
}