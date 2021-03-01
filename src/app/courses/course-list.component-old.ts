import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

//Decorator que indica ao angular que essa
//classe é elegível para ser um componente
@Component({
    // como chamaremos esse componente no projeto
    //vira uma "tag"

    //ao começar a utilizar rotas, essa propriedade passa
    //a ficar inválida, visto que seu objetivo é ser utilizado
    //entre componentes via tag.
    //assim sendo, após a criação da rota courses, desabilitou-se
    //esse cara.
    //selector: 'app-course-list',
    //pode ser estático, escrevendo o html nele
    //ou pode se referenciar a uma página html
    //A boa prática diz que, se o html aqui tiver
    //até cinco linhas, escreve-se aqui mesmo.
    //O instrutor prefere criar SEMPRE um html
    //separado para ficar mais organizado.
    //template: '<h2>Course List</h2>'
    //Quando utilizamos aruqivo html, a propriedade é
    //a templateUrl.
    templateUrl: './course-list.component.html'
})


//devemos informar no arquivo app.module.ts
//que esse componente existe, para que o ambiente
//o reconheça de forma correta.
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = "";
    

    //A maneira que o Angular injeta dependências é através de construtores
    //Essa linha faz referência ao objeto já criado CourseService e 
    //injeta ele dentro desse coódigo, deixando as variáveis e métodos
    //existentes neles acessíveis.
    constructor(private CourseService: CourseService){}

    //QUando implementamos a interface OnInit
    //temos a chance de executar um hook na inicialização
    //do componente.
    //Para isso, implementamos o método ngOnInit() que é chamado
    //assim que o componente é criado

    ngOnInit(): void{
        // this.courses = [
        //     {
        //         id: 1,
        //         name: "Angular: Forms",
        //         imageUrl: "/assets/images/forms.png",
        //         price: 99.99,
        //         code: "XPS-8796",
        //         duration: 120,
        //         rating: 4.5,
        //         releaseDate: "November, 2, 2019" 
        //     },
        //     {
        //         id: 2,
        //         name: "Angular: HTTP",
        //         imageUrl: "/assets/images/http.png",
        //         price: 49.99,
        //         code: "LKL-1045",
        //         duration: 80,
        //         rating: 4,
        //         releaseDate: "December, 4, 2019" 
        //     }
        // ]
        this._courses = this.CourseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    //maneira de tratar do two way data binding
    //criando getter e setter para o atributo cujo nome
    //deve ser igual ao valor colocado na tag ngModel do nosso
    //input
    //<input {(ngModel)}='filter' class="form-control">
    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => 
            course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(): string{
        return this._filterBy;
    }

}