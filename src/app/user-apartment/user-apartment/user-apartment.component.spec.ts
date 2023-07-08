import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApartmentComponent } from './user-apartment.component';

describe('UserApartmentComponent', () => {
  let component: UserApartmentComponent;
  let fixture: ComponentFixture<UserApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserApartmentComponent]
    });
    fixture = TestBed.createComponent(UserApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
