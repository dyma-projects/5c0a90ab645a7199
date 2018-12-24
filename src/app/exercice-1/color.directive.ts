import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  private element : HTMLParagraphElement;

  @HostListener('window:keydown', ['$event'])
  windowClick($event : KeyboardEvent) {

    switch ($event.key) {
      case "ArrowRight":
        this.element.style.color = 'red';
        break;

      case "ArrowLeft":
        this.element.style.color = 'blue';
        break;

      case "ArrowUp":
        this.element.style.color = 'yellow';
        break;

      case "ArrowDown":
        this.element.style.color = 'brown';
        break;
    }
  }

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

}
