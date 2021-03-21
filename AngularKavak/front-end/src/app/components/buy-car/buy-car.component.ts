import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})
export class BuyCarComponent implements OnInit {
  yearValue:string ='' ;
  SearchYear:number = undefined;
  SearchType = '';
  constructor(public carService : CarService) { }

  ngOnInit(): void {
    this.carService.getCars()    
  }
  yearFilter(){
    this.SearchYear = Number(this.yearValue);
    this.SearchType = 'year';
    this.carService.getCars()    
    
  }

  Number(value : string): number{

      return Number(value)
  }

  filterClear(){
    this.SearchType = ''
    this.yearValue = undefined
  }
}
