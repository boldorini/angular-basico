//https://angular.io/docs

//import { NgModule, Pipe } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';

//esse cara aqui eu importei pq o Injectable não deu certo
//ver anotações no arquivo course.service.ts
import { CourseService } from './courses/course.service';
import { CoreModule } from './core/core.module';

//import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';


//import { CourseInfoComponent } from './courses/course-info.component';
//import { CourseListComponent } from './courses/course-list.component';
//import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { ReplacePipe } from './pipes/replace.pipe';
//import { StarComponent } from './star/star.component';
//import { Error404Component } from './core/component/erro-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent
    //acrescentado após a criação do componente.
    //ATENÇÃO: SEMPRE QUE CRIARMOS UM MÓDULO NOVO,
    //ACRESCENTAR AQUI!!!        
    //Passou a ser utilizado como Módulo
    //NavBarComponent,
    //Error404Component
    //NÃO PODE IMPORTAR 2 VEZES O MESMO MÓDULO,
    //QUANDO SEGREGAMOS A APLICAÇÃO COLOCAMOS ESSES IMPORTS
    //NA COURSE.MODULE.TS
  // CourseListComponent,
  // CourseInfoComponent    
  
  //ReplacePipe,
  //StarComponent,
     
  ],
  imports: [
    BrowserModule,
    //módulo de forms
    FormsModule,
    //módulo de rotas 
    //o método forRoot recebe um array de rotas
    //que contém um objeto de rotas, contendo as 
    //rotas da nossa aplicação
    RouterModule.forRoot([
       //paths personalizados
      /********************************************************************************************** */
      //TRANFERIDO PARA COURSE.MODULE.TS
      //  {
      //   path:"courses", component: CourseListComponent
      // },
      // {
      //   //Essa anotação :id passa a informação que essa url recebe uma
      //   //variavel de URL que será transmitida com o nome id
      //   path:"courses/info/:id", component: CourseInfoComponent
      // },
      /************************************************************************************************* */
      {
        //reflete a url do browser
        //qdo vazia é a raiz do projeto
        //redirectTo: courses (rota)
        //por não estar rediredcionando para outro componente e sim para uma rota utiliza-se o pathMatch: full 
        //http://localhost:4200/ aponta para path: ""
        //angular tem 2 rotas padrão: a "" e a "**", a primeira é o root (raíz) do nosso projeto, a outra é qdo não for
        //encontrada a url informada.
        //basePath
        path: "", redirectTo: "courses", pathMatch: "full"
      }
      //erro
      //TRANSFERIDA PARA A PASTA CORE
      //CORE.MODULE.TS
      // {
      //   path: "**", component: Error404Component
      // }
    ]),
    //Módulo para trabalhar com requisições HTTP
    HttpClientModule,
    CourseModule,
    CoreModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
