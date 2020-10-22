import { RestaurantService } from './../service/restaurant.service';
import { RestaurantList } from './../model/restaurantList';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  parameters={
    filter:{
      priceFrom: 1,
      priceTo: 5,
      cuisine: ""
    },
    page:1,
    pageSize: 3
  }
  restaurants: RestaurantList;
  constructor( private rest: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{ 
    let cuisineParam = x['cuisine'] == 'all'? '' : x['cuisine'];
    this.parameters.filter.cuisine = cuisineParam;
    this.update();
   })
  };

  update(){
    this.rest.getAllRestaurants(this.parameters).subscribe(
      data =>{this.restaurants = data}
    )
  };

  changePage(newPage){
    this.parameters.page = newPage;
    this.update();  
  }
};
 