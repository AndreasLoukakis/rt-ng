import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() parentVar: string;
  // this will get input changes only without setting onpush, or whenever an other input triggers update
  //
  @Input() parentObj: any;

  @Output()

  get localVar(): string {
    return this.parentVar;
  }

  localObj: any;

  constructor() { }

  ngOnInit(): void {
    // setting local var here (or in the constructor), will not update on input change
    this.localObj = this.parentObj;
  }

}
