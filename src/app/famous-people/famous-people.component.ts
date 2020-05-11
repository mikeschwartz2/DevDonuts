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
  dev:Dev[];
  showEdit:boolean = false;
  editedDev:string = "";
  editId:number;

  showLoading:boolean=true;

  constructor(private DevService: DevService) { }

  ngOnInit(): void {

    this.displayLoad();


    this.DevService.getDevs().subscribe( 
      (data: Devs)=> {this.devs = { ...data };
      console.log(this.devs);},
      error => console.error(error)
    );

    

  }
  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }
  async displayLoad(){

    await this.sleep(2000);
      this.showLoading = false;

}

addPerson = function(addFirstName, addLastName, addInovation, addYear) {
  console.log(addFirstName, addLastName, addInovation, addYear);
  this.dev.push( { firstName: addFirstName, lastName: addLastName, innovation: addInovation, year: addYear } )

}
displayEdit(i){
  this.showEdit = true;
  this.editId = i;
}
editDev = function(i, firstName, lastName, innovation, year) {
  this.dev[i].firstName = (firstName);
  this.dev[i].lastName = (lastName);
  this.dev[i].innovation = (innovation);
  this.dev[i].year = (year);
  this.showEdit = false;

}


}
