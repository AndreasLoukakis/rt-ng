import { Component, OnInit, Input } from '@angular/core';
import { Planets } from './../../../../shared/models';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  @Input() data: Planets[];

  constructor() { }

  ngOnInit(): void {
  }

}
