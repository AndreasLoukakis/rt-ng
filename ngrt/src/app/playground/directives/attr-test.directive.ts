import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // try using different selectors, like plain input or other variations. It's similar to quering the dom (but not really)
  selector: 'input[type=text]'
})
export class AttrTestDirective {

  constructor(
    private el: ElementRef,
    // private ngControl: NgControl = undefined
    // use NNgControl when using reactive forms.
  ) {
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

    // use ngControl when dealing with Reactive forms. When nativeelement & ngcontrol both can do the job,
    // I would prefer ngcontrol because it looks cleaner
    // if (this.ngControl) {
    //   console.log('control: ', this.ngControl.control.value);
    // }
  }

  // bind to host element attributes or properties
  @HostBinding('attr.class') cssClass = 'someBinndedClass';
  // of if we want to add a class, not replace them we will also
  // need an input and some more setup to handle a private var
  // with accessors


}
