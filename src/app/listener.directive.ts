import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appListener]',
  standalone: true,
})
export class ListenerDirective {
  private listeners: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  handleListeners(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ) {
    const handler = this.renderer.listen(target, eventName, callback);
    this.listeners.push(handler);
  }

  ngOnDestroy(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}
