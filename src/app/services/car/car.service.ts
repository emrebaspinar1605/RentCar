import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars:Car[]=[];
  apiUrl='https://localhost:44374/api/cars/getall';
  
  carResponseModel:CarResponseModel={
    data:this.cars,
    message:"",
    success:true
  };

constructor(private httpClient:HttpClient) { }
  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
