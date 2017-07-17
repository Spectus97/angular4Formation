import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upperCaseLastLetter'
})

export class NamePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if(value){
            return value.substring(0,value.length) + value[value.length-1].toUpperCase();
        }
        return value;
    }
}