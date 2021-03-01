//A pasta core contém os módulos mais pesados que representam
//uma parte robusta da aplicação, que não são reutilizados
//com frequência no projeto.

//Já a pasta shared contém módulos pequenos que são amplamente
//reutilizados no projeto, tais como componentes de pipe, entre outros

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/erro-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: "**", component: Error404Component
            }
        ])

    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}