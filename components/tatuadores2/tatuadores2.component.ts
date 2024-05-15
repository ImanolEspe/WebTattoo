import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TatuadoresInterfaces } from '../../interfaces/tatuadores.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tatuadores2',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './tatuadores2.component.html',
  styleUrl: './tatuadores2.component.css'
})
export class Tatuadores2Component {

  constructor(private router: Router){

  }

  public tatuadores: TatuadoresInterfaces[]=[
    {
      nombre: "Jorge",
      estilo: "Realismo",
      rutaImagen: "https://i.pinimg.com/564x/9b/ec/d0/9becd0de102ec1d03512d395cf988e3c.jpg",
      
    },
    {
      nombre: "Wang",
      estilo: "Puntillismo",
      rutaImagen: "https://i.pinimg.com/564x/d7/1a/2b/d71a2b3849a8970421b39b3456b9f418.jpg",
    },
    {
      nombre: "Isabel",
      estilo: "Anime",
      rutaImagen: "https://i.pinimg.com/564x/6b/9f/f2/6b9ff2a9dd105dd35428e2b0e0fe02f0.jpg",
    },
    {
      nombre: "Maria",
      estilo: "Blackwork",
      rutaImagen: "https://i.pinimg.com/564x/7b/5f/2e/7b5f2e7493d188e7539b38ddb4ebfd0f.jpg",  
    },
  ]

  public click(nombre:string){
    console.log(nombre)
    this.router.navigate(['/disenos'], {queryParams: {nombre: nombre}});
  }
}
