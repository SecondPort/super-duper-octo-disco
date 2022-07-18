import { Component } from "@angular/core";

@Component({
    selector: "app-personas",
    template: `<h1>listado de peronas</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>`
})
export class PersonasComponent{
    nombre = "Juan";
    apellido = "Perez";
}