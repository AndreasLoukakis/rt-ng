import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: 'input'
})
export class AttrTestDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.backgroundColor = 'lightgrey';
  }

  @HostListener('input', ['$event']) input(e) {
    // console.log(this.el.nativeElement.value)
    console.log(e.target.value)
  }



}
