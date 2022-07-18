import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
/* The class PersonaComponent has a property called nombre, a property called apellido, a property
called edad, and a method called getEdad. */
export class PersonaComponent {
  nombre:string = 'Juan';
  apellido:string = 'Perez';
  private edad:number = 30;

  getEdad = () => this.edad;

}
