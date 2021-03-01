import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    //esse será o nome do pipe qdo formos utilizá-lo
    name: "replace"
})

export class ReplacePipe implements PipeTransform{
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char,valueToReplace);

    }
}