import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental/rental';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentals:Rental[]=[];
  apiUrl="https://localhost:44374/api/rentals/getall";
  
  rentalResponseModel:RentalResponseModel={
    data:this.rentals,
    message:"",
    success:true
  };

  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
