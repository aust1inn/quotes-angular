import { Directive, ElementRef } from '@angular/core';
import { Quotes } from '../model/quotes';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor="yellow"
   }
}
