import { Component, OnInit } from '@angular/core';
import { UserApartmentService } from 'src/app/Services/userApartment.service';
import { Apartment } from 'src/app/_models/Apartment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-apartment',
  templateUrl: './user-apartment.component.html',
  styleUrls: ['./user-apartment.component.css']
})
export class UserApartmentComponent implements OnInit {
  sub: Subscription | null = null;
  Apartment: Apartment[] | null = null;
  public notFavorite = true;
  public Price: any;
  activeSlideIndex: number[] = [];

  constructor(
    private appartementService: UserApartmentService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.router.queryParams.subscribe((data) => {
      this.appartementService.getApartments().subscribe((data) => {
        this.Apartment = data;
        this.activeSlideIndex = new Array(this.Apartment.length).fill(0);
      });
    });
  }

  nextSlide(index: number) {
    this.activeSlideIndex[index] = (this.activeSlideIndex[index] + 1) % (this.Apartment?.[index]?.photos?.length ?? 0);
  }

  prevSlide(index: number) {
    this.activeSlideIndex[index] = (this.activeSlideIndex[index] - 1 + (this.Apartment?.[index]?.photos?.length ?? 0)) % (this.Apartment?.[index]?.photos?.length ?? 0);
  }
  
}