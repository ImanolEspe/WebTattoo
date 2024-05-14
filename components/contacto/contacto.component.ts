import { Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  
  constructor (private router: Router){
    
  }
  rutaFormulario(){
    this.router.navigate(['/citas']);
  }
}
