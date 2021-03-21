import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiAuthService } from 'src/app/services/api-auth.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  constructor(public carService : CarService,
              public toastr: ToastrService, public apiauth: ApiAuthService) { 
              }

  ngOnInit(): void {
    this.carService.getCars();
  }

  deleteCar(id: number){
    if(confirm('Esta seguro de eliminar este registro?')){
      this.carService.deleteCar(id).subscribe(data => {
        this.toastr.warning('Registro eliminado', 'El auto fue eliminado');
        this.carService.getCars();
      });
    }
  }

  update(car){
    this.carService.update(car);
  }

}
