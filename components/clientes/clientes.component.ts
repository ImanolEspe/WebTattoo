import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  datos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.obtenerDatos().subscribe(data => {
      this.datos = data;
    });
  }
}
