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
    titulo = "";
    agregarPersona = () => this.mensaje = "Se ha agregado una persona";

    modificarTitulo = (event:Event) => {
        //debemos realizar un casteo para que el evento sea compatible con el tipo de dato que es
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}