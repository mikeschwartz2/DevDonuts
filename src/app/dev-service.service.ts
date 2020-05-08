import { Injectable } from '@angular/core';
import { Dev, Devs } from './interfaces/dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http:HttpClient) { }

  getDevs() {
    return this.http.get<Devs>(this.apiUrl);
  }

}
