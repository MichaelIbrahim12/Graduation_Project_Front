import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../_models/Apartment';

@Injectable({
  providedIn: 'root'
})
export class UserApartmentService {
  private apiUrl = 'https://localhost:7080/getuserapartment';

  constructor(private http: HttpClient) { }
  // userId: string userId: string
  getApartments(): Observable<Apartment[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Apartment[]>(url);
  }
}