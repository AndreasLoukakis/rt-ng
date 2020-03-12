import { Directive, ElementRef, Renderer2, Input, AfterViewInit, HostBinding } from '@angular/core';
import { Movie } from '../../../shared/models/movie';

@Directive({
  selector: '[appTplModifier]'
})
export class TplModifierDirective implements AfterViewInit {

  @Input() appTplModifier: Movie;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.appTplModifier.director === 'George Lucas') {
      this.renderer.addClass(this.el.nativeElement, 'is-lucas-film');
    }
  }

}
