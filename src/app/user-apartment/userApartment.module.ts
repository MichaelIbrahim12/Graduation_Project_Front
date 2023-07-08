import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApartmentComponent } from './user-apartment/user-apartment.component';
import { FormsModule } from '@angular/forms';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserApartmentComponent,
  ],
  imports: [
    CommonModule,FormsModule,
  ],
  exports:[
    UserApartmentComponent,
  ]
})
export class UserApartmentModule { }
