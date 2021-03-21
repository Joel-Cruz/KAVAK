import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  myAppUrl = 'https://localhost:44359/';
  myApiUrl = 'api/cars';
  list: Car[];
  private updateForm = new BehaviorSubject<Car>({} as any)
  constructor(private http: HttpClient) { }

  saveCar(car : Car): Observable<Car>{
    return this.http.post<Car>(this.myAppUrl + this.myApiUrl,car);
  }

  deleteCar(id: number): Observable<Car>{
    return this.http.delete<Car>(this.myAppUrl + this.myApiUrl + '/' + id);
  }

  getCars(){
    this.http.get<Car>(this.myAppUrl + this.myApiUrl).toPromise()
                      .then(data => {
                        this.list = data as unknown as Car[];
                      });
  }

  updateCar(id: number, car: Car): Observable<Car>{
    return this.http.put<Car>(this.myAppUrl + this.myApiUrl + '/' + id, car)
  }

  update(car){
    this.updateForm.next(car);
  }

  getCar$(): Observable<Car>{
    return this.updateForm.asObservable();
  }

}
