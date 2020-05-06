import { Component, OnInit, Input } from '@angular/core';
import { Donut } from '../interfaces/donut';
import { DonutService } from '../donut-service.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {
  @Input() myDonut:Donut;

  constructor() { }

  ngOnInit(): void {
  }

}
