import { Component } from "@angular/core";

@Component({
    //lembrando que só definimos selector
    //para um componente quando iremos utilizá-lo
    //em outros componentes.
    //Nesse caso, iremos chamá-lo via rotas, logo
    //não é necessário criar o selector para ele.
    /****************************************************/
    /****************************************************/
    /*EM COMPONENTES DE ROTA NÃO PRECISAMOS TER SELECTOR*/
    /****************************************************/
    /****************************************************/
    templateUrl: "./error-404.component.html"
})
export class Error404Component{

}