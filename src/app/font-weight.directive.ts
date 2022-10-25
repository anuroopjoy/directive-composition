import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true,
})
export class FontWtDirective implements OnChanges {
  @Input() weight!: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weight']) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'font-weight',
        this.weight
      );
    }
  }
}
