import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ItemComponent } from './item/item.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    RestaurantsComponent,
    ItemComponent,
    RatingComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
