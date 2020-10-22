import { RestaurantService } from './../service/restaurant.service';
import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantMenu } from '../model/restaurantMenu';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() restaurant:Restaurant;
  menu;
  constructor(private modal:NgbModal, private service:RestaurantService) { }

  ngOnInit(): void {
    this.service.getMenu(this.restaurant._id).subscribe(x =>{
      this.menu = x;
    });
  }

  openModal(){
    const modalRef =this.modal.open(ModalComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
    modalRef.componentInstance.menu = this.menu;
  }
}
