import { Component, OnInit } from '@angular/core';
import { DevService } from '../dev-service.service';
import { Dev, Devs } from '../interfaces/dev';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.scss']
})
export class FamousPeopleComponent implements OnInit {
  devs:Devs;

  constructor(private DevService: DevService) { }

  ngOnInit(): void {
    this.DevService.getDevs().subscribe( 
      (data: Devs)=> {this.devs = { ...data };
      console.log(this.devs);},
      error => console.error(error)
    )
  }

}
