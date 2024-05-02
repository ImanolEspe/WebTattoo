import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Cliente } from '../../cliente.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-citas',
  standalone: true,
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  imports: [FormsModule]
})
export class CitasComponent {
  nuevoCliente: Cliente = {} as Cliente;

  constructor(private apiService: ApiService) {}

  agregarCliente() {
    this.apiService.agregarCliente(this.nuevoCliente).subscribe(response => {
      // Maneja la respuesta del servidor
    });
  }
}