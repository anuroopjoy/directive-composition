import { Directive } from '@angular/core';
import { FontWtDirective } from './font-weight.directive';
import { ColorDirective } from './color.directive';

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives: [
    { directive: ColorDirective, inputs: ['color'] },
    { directive: FontWtDirective, inputs: ['weight'] },
  ],
})
export class StyleDirective {}
