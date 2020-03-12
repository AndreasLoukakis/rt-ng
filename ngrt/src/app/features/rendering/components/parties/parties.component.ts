import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {

  @Input() urls: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
