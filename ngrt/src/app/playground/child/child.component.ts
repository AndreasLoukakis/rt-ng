import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() parentVar: any;
  @Output() childChanged: EventEmitter<{name: string, age: any}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementAge(name: string) {
    const emitData = {
      name,
      age: ++this.parentVar.find(item => item.name === name).age
    }
    this.childChanged.emit(emitData);
  }

}
