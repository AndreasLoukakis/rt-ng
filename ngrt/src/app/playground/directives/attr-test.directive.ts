import { Directive, ElementRef } from '@angular/core';

@Directive({
  // try using different selectors, like plain input or other variations. It's similar to quering the dom (but not really)
  selector: 'input[type=text]'
})
export class AttrTestDirective {


  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'grey'
  }

}
