import { Directive } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appSubscription]',
  standalone: true,
})
export class SubscriptionDirective {
  private subscriptions: Subscription[] = [];

  handleSubscription(source: Observable<any>, handler: any) {
    const sub = source.subscribe(handler);
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
