import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  dataTobind: string[] = [
    'foo', 'bar', 'GEorge', 'John'
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onDataChannged(ev) {
    console.log('I heard the event:', ev);
  }

}
