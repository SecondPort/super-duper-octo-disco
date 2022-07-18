/* The PersonasComponent class is a component class that has a property called disable that is set to
false */
import { Component } from "@angular/core";

/* A decorator that is used to define the metadata of the component. */
@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrls: ["./personas.component.css"]
})
export class PersonasComponent{
    disable = false;
    mensaje = "No se ha pulsado el botón";
    agregarPersona = () => this.mensaje = "Se ha agregado una persona";
}