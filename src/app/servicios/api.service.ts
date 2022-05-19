import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  paisesRegion() {
    return this.http.get('https://restcountries.com/v3.1/subregion/africa');
  }
}
