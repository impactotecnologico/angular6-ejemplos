import { Directive, ElementRef } from '@angular/core';
@Directive({
 // tslint:disable-next-line:directive-selector
 selector: '[colorer]'
})
export class ColorerDirective{
  constructor(el: ElementRef) {
      el.nativeElement.style.color = 'red';
   }
}
