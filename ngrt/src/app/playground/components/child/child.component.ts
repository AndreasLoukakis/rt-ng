import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() items: any;
  @Output() childChanged: EventEmitter<{name: string, age: any}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  notify(event: {name: string, age: any}) {
    this.childChanged.emit(event)
  }

}
