import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-formulario.component.html',
  styleUrl: './cliente-formulario.component.css'
})
export class ClienteFormularioComponent {
    nuevoCliente = {
      nombre: '',
      apellidos: '',
      calle: '',
      email: '',
      numTelefono: ''
    };
  
    constructor(private http: HttpClient) {}
  
    agregarCliente() {
      this.http.post('http://localhost:5000/agregar-cliente', this.nuevoCliente)
        .subscribe((response) => {
          console.log(response);
          // Reiniciar el formulario después de agregar el cliente
          this.nuevoCliente = {
            nombre: '',
            apellidos: '',
            calle: '',
            email: '',
            numTelefono: ''
          };
        });
    }
  
}

