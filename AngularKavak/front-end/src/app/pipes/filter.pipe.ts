import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any ,propName: any): any {
    if(propName === ""){
      return value;
    }
    const carsArray=[];
    for( let car of value){

      if(car[propName] === filterString){
        carsArray.push(car);
      }
    }

    return carsArray;
  }



}
