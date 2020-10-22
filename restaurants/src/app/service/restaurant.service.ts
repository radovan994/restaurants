import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurantList';
import { map } from 'rxjs/operators'
import { RestaurantMenu } from '../model/restaurantMenu';

const url = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }
  
  
  getAllRestaurants(params?:any): Observable<RestaurantList>{
    let queryParams={};
    if (params){
      queryParams = {
        params: new HttpParams().set("page", params.page || "").set("pageSize", params.pageSize || "")
        .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get(url, queryParams).pipe(map(x =>{
      return new RestaurantList(x);
    }));
  }
  getMenu(id:number): Observable<RestaurantMenu>{
    return this.http.get(url + "/" + id + "/menus").pipe(map(x =>{
      return new RestaurantMenu(x);
    }));
  }
}
