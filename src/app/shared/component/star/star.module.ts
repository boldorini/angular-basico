import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule({
    declarations:[
        StarComponent
    ],
    //serve para dizer ao Angular que vamos exportar algo desse módulo
    //para ser utilizado em outro módulo.
    exports: [
        StarComponent
    ]
})
export class StarModule{

}