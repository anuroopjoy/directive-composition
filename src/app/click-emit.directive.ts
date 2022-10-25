import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmit]',
  standalone: true,
})
export class ClickEmitDirective {
  @Output() appEmit = new EventEmitter();
  @HostListener('click')
  onClick() {
    this.appEmit.emit();
  }
}
