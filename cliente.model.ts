export class Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    calle: string;
    email: string;
    numTelefono: string;
  
    constructor(id: number, nombre: string, apellidos: string, calle: string, email: string, numTelefono: string) {
      this.id = id;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.calle = calle;
      this.email = email;
      this.numTelefono = numTelefono;
    }
  }