import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  parentNgModelvar: string = 'init value';
  parentObj = {
    a: 'foo'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
