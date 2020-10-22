import { RestaurantService } from './../service/restaurant.service';
import { RestaurantMenu } from './../model/restaurantMenu';
import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Input() menu:RestaurantMenu;
  hours = [];
  names = [];
  constructor( private service: RestaurantService) { }

  ngOnInit(): void {
    
    console.log(this.menu)

    for(let dan in this.restaurant.days){
      let sati = this.restaurant.days[dan];
      this.hours.push(sati);
      switch (dan) {

        case "0":
        case "7":
          dan = "Sunday";
          break;
        case "1":
          dan = "Monday";
          break;
        case "2":
          dan = "Tuesday";
          break;
        case "3":
          dan = "Wednesday";
          break;
        case "4":
          dan = "Thursady";
          break;
        case "5":
          dan = "Friday";
          break;
        case "6":
          dan = "Saturday";
          break;
      }
      this.names.push(dan);

    }  
  }

}
