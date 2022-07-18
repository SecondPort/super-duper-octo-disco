import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  Valor1 = 0;
  Valor2 = 0;
  resultado = 0;

  ValorA = (event:Event) =>{
    this.Valor1 = Number((<HTMLInputElement>event.target).value);
  }
  ValorB= (event:Event) =>{
    this.Valor2 = Number((<HTMLInputElement>event.target).value);
  }

  Sumar = () =>{
    this.resultado = this.Valor1 + this.Valor2;
  }
}
