import { Component, OnInit, Input } from '@angular/core';
import { Vehicles } from './../../../../shared/models';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  @Input() data: Vehicles[];
  constructor() { }

  ngOnInit(): void {
  }

}
