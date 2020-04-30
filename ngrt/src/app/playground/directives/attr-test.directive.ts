import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttrTest]'
})
export class AttrTestDirective {


  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('click', ['$event']) clicked(e) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
