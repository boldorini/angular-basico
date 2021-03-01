//import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";


//Essa anotação faz com que esse objeto seja elegível para
//injeção de dependências, e o provideIn: 'root' faz com que
//ele seja carregado na root da aplicação.

//estava dando erro, eu peguei a dica da solução em
//https://cursos.alura.com.br/forum/topico-erro-no-injectable-providedin-root-95602
//acrescentei o módulo no app.module.js, na tag providers.
// providers: [seu_service]

// @Injectable({
//     provideIn: 'root'
// })

//Nas classes de serviço evita-se criar
//variáveis que possam ser alteradas
//BOAS PRÁTICAS

//A classe de serviços serve para chamar
//métodos que façam ou chamem outra alteração
//ou varíaves estáticas que não possa ser alterado
//VARIÁVEIS FINAL
//Na prática o Angular cria uma única instância desse
//objeto de serviço e vai compartilhar essa instância
//entre todas as chamadas desse componente
@Injectable()
export class CourseService{

    private coursesUrl: string = "http://localhost:3100/api/courses";

    constructor(private httpClient:HttpClient){}

    // retrieveAll(): Course[] {
    //     return COURSES;
    // }

    retrieveAll(): Observable<Course[]> {
        //httpClient.get retorna um observable
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    // retrieveById(id: number): Course|undefined{
    //     //precisei fazer um ajuste e forçar o tipo do retorno ser sempre Course
    //     //o find pode retornar undefined, por isso a declaração do tipo |undefined se fez
    //     //necessária... como nesse caso eu tenho certeza que NUNCA retornará undefined
    //     //essa função funciona corretamente sem necessidade de preocupação
    //     let course:Course|undefined = COURSES.find((courseIterator: Course) => courseIterator.id === id);
    //     return course as Course;
    // }

    retrieveById(id: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }


    // save(course: Course|undefined): void{
    //     if(course?.id){
    //         const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
    //         COURSES[index] = course;
    //     }
    // }

    save(course: Course|undefined): Observable<Course>{
        if(course?.id){
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`,course);
        }else{
            return this.httpClient.post<Course>(`${this.coursesUrl}`,course);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}
var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];