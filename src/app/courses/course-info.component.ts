import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "./course-info.component.html"
})
export class CourseInfoComponent implements OnInit{
    course: Course|undefined;

    //aqui estamos injetando dependência do módulo
    //router com o método ActivatedRoute
    //que devolve informações sobre a rota atual
    //que foi disparada.
    //IMPORTANTE: somente através do construtur podemos injetar dependências.
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    }

    // ngOnInit(): void {        
    //     this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get("id")));
    // }

    ngOnInit(): void {        
        this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get("id"))).subscribe({
            next: course => this.course = course,
            error: err => console.log(err)
        });
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Saved with success!", course),
            error: err => console.log(err)
        });
    }   
    
}