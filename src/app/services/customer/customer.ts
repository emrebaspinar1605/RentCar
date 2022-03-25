import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerResponseModel } from 'src/app/models/customer/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Customer[]=[];
  apiUrl="https://localhost:44374/api/customers/getall";
  
  customerResponseModel:CustomerResponseModel={
    data:this.customers,
    message:"",
    success:true
  };

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
