import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donuts } from './interfaces/donut'

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http:HttpClient) { }

  getDonuts() {
    return this.http.get<Donuts>(this.apiUrl);
  }


}
