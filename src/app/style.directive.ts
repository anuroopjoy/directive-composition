import { Directive, Input } from '@angular/core';
import { FontWtDirective } from './font-weight.directive';
import { ColorDirective } from './color.directive';
import { ClickEmitDirective } from './click-emit.directive';

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives: [
    { directive: ColorDirective, inputs: ['color: mycolor'] },
    { directive: FontWtDirective, inputs: ['weight: myweight'] },
    { directive: ClickEmitDirective, outputs: ['appEmit: clickEmit'] },
  ],
})
export class StyleDirective {}
