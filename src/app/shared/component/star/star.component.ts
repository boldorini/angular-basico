import { Component, Input, OnChanges } from "@angular/core";

//O Component é um Decorator que transforma a classe em um módulo
//Define uma classe como um componente, module, pipe, service, e seus metadados
//que determina como o mesmo deverá ser processado.

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    //para passar uma folha de estilo para nosso componente
    //utilizamos a propriedade styleUrls que recebe
    //uma lista de folhas de estilo.
    //esse estilo fica somente dentro desse componente somente!!!
    styleUrls: ["./star.component.css"]
})

//A interface OnChanges permite que uma ação qualquer
//seja disparada quando houver modificação 
export class StarComponent implements OnChanges{

    //variável que recebe valor de outro componente
    //INTEGRAÇÃO ENTRE COMPONENTES
    //deve ser anotada como @Input conforme abaixo
    //ela fica elegível para receber valores de
    //componentes externos
    // quando utilizado, ele permite que crie-se atributos na tag do componente
    //nesse caso temos a tag <app-star rating> :D
    //OLHAR course-list.component.html

    @Input() 
    rating: number = 0;

    starWidth: number = 0;

    ngOnChanges(): void{
        //se não funcionar com 94, alterar para 94... problemas com font-awesome
        //PESQUISAR SOBRE!!!
        this.starWidth = this.rating * 74 / 5;
    }

}