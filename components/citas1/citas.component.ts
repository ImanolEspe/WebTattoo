import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Cliente } from '../../cliente.model';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  nuevoCliente: Cliente = {} as Cliente;

  constructor(private apiService: ApiService) {}

  agregarCliente() {
    this.apiService.agregarCliente(this.nuevoCliente).subscribe(response => {
      // Maneja la respuesta del servidor si es necesario
    });
  }
}