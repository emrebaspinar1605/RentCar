import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetail } from 'src/app/models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
  apiUrl="https://localhost:44374/api/rentals/getrentaldetails";
  constructor(private httpClient:HttpClient) { }
  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl);
  }
}
