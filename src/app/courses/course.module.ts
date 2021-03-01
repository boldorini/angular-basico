import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

//import { StarComponent } from "../star/star.component";
//import { ReplacePipe } from "../shared/pipe/replace.pipe";

//Deixa o componente elegível para ser um módulo
//Utiliza-se Módulos para segregar responsabilidades
//e deixa o projeto mais coerente, importando somente
//os módulos que forem necessários em cada um dos componentes

//São contêineres, ou limitadores de contexto, para um bloco de código coeso de um área de domínio da aplicação.

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfoComponent        
        //Deixou de usar componente e passou a usar o módulo
        //StarComponent
        //ReplacePipe
    ],
    imports:[
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path:"courses", component: CourseListComponent
            },
            {
                path:"courses/info/:id", component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule{

}