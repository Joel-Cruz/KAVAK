import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription;
  car : Car;
  idCar : number;
  constructor(private formBuilder: FormBuilder, private carService: CarService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      id : 0,
      name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]],
      model: ['', [Validators.required,Validators.maxLength(30), Validators.minLength(5)]],
      brand: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
      year: ['', [Validators.required]],
      type: ['', [Validators.required]],
      mileage: ['', [Validators.required,Validators.maxLength(6), Validators.minLength(5)]],
      city: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.maxLength(7), Validators.min(5)]]
    })
  }

  ngOnInit(): void {
    this.suscription = this.carService.getCar$().subscribe(data =>{
      this.car = data;
      this.form.patchValue({
        name: this.car.name,
        model: this.car.model,
        brand: this.car.brand,
        year: this.car.year,
        type: this.car.type,
        mileage: this.car.mileage,
        city: this.car.city,
        price: this.car.price
        
      })
      this.idCar = this.car.id;

    })
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();

  }  

  saveCar(){
    if(this.idCar === 0 || this.idCar === undefined){
      this.addCar()
    }
    else{
      this.editCar()
    }
    
  }

  addCar(){
    const car: Car = {
      name: this.form.get('name').value,
      model: this.form.get('model').value,
      brand: this.form.get('brand').value,
      year: this.form.get('year').value,
      type: this.form.get('type').value,
      mileage: this.form.get('mileage').value,
      city: this.form.get('city').value,
      price: this.form.get('price').value

    }
    this.carService.saveCar(car).subscribe(data =>{
      this.toastr.success('Registro Agregado', 'El auto fue agregado');
      this.carService.getCars();
      this.form.reset();
    });
  }

  editCar(){
    const car: Car = {
      id : this.car.id,
      name: this.form.get('name').value,
      model: this.form.get('model').value,
      brand: this.form.get('brand').value,
      year: this.form.get('year').value,
      type: this.form.get('type').value,
      mileage: this.form.get('mileage').value,
      city: this.form.get('city').value,
      price: this.form.get('price').value

    }
    this.carService.updateCar(this.idCar, car).subscribe(data =>{
      this.toastr.success('Registro Actualizado', 'El auto fue actualizado');
      this.carService.getCars();
      this.form.reset();
      this.idCar = 0;
    })

  }


}
