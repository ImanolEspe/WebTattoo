import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Cliente } from '../../cliente.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  standalone: true,
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  imports: [FormsModule, CommonModule],
  providers: []
})
export class CitasComponent {
  nuevoCliente: Cliente = {} as Cliente;
  mostrarPopup: boolean = false; // Variable para controlar la visibilidad del popup

  constructor(private apiService: ApiService,
              private router: Router
  ) {}

  agregarCliente() {
    console.log(this.nuevoCliente)
    this.apiService.agregarCliente(this.nuevoCliente).subscribe(
      (response) => {
        // Maneja la respuesta del servidor
        this.mostrarPopup = true; // Muestra el popup después de agregar el cliente
      });
  }

  cerrarPopup() {
    this.mostrarPopup = false; // Método para cerrar el popup
    this.router.navigate(['/home']);
  }
}