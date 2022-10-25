import { Directive, Input } from '@angular/core';
import { FontWtDirective } from './font-weight.directive';
import { ColorDirective } from './color.directive';

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives: [
    { directive: ColorDirective, inputs: ['color: mycolor'] },
    { directive: FontWtDirective, inputs: ['weight: myweight'] },
  ],
})
export class StyleDirective {}
