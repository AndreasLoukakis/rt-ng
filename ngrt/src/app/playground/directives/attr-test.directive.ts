import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // try using different selectors, like plain input or other variations. It's similar to quering the dom (but not really)
  selector: 'input[type=text]'
})
export class AttrTestDirective {



  constructor(private el: ElementRef, private ngControl: NgControl) {
    // directrly access element via elementref
    this.el.nativeElement.style.backgroundColor = 'grey';
    // or
    // el.nativeElement.setAttribute('disabled', true);
  }

  // react to host events
  @HostListener('input', ['$event']) input(e) {
    // several ways of accessing host element value
    console.log('event', e.target.value)
    console.log('nativeElement', this.el.nativeElement.value);
    // use ngControl when dealing with Form concerns. When nativeelement & ngcontrol both can do the job,
    // I would prefer ngcontrol because it looks cleaner
    console.log('control: ', this.ngControl.control.value);
  }

  // bind to host element attributes or properties
  @HostBinding('attr.class') cssClass = 'bindedClass';

}
