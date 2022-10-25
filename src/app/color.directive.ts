import {
  Directive,
  ElementRef,
  OnChanges,
  Renderer2,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective implements OnChanges {
  @Input() color!: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    }
  }
}
