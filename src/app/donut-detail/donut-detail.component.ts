import { Component, OnInit, Input } from '@angular/core';
import { Donut, Donuts } from '../interfaces/donut';
import { DonutService } from '../donut-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {
  @Input() myDonut:string;
  donut:Donut;
  id:number;

  constructor(private DonutService:DonutService, 
    private route:ActivatedRoute) {
  }
  test1 = function() {
    this.DonutService.getDonut().subscribe( 
      (data: Donut)=> this.donut = { ...data },
      error => console.error(error),
      console.log(this.myDonut)
    )
  }

  ngOnInit(): void {
    
  }

}
