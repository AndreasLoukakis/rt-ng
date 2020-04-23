import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @Input() data: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
