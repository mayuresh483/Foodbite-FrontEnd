import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { ORDER_CREATE_URL } from '../shared/utility/constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL,order);
  }
}