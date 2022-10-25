import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ListenerDirective } from '../listener.directive';
import { SharedService } from '../shared.service';
import { SubscriptionDirective } from '../subscription.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [SubscriptionDirective, ListenerDirective],
})
export class ChildComponent implements OnInit {
  public data!: any;
  private subscriptionHandler: SubscriptionDirective;
  private listenerHandler: ListenerDirective;
  constructor(private sharedService: SharedService) {
    this.subscriptionHandler = inject(SubscriptionDirective);
    this.listenerHandler = inject(ListenerDirective);
  }

  ngOnInit(): void {
    this.subscriptionHandler.handleSubscription(
      this.sharedService.onSendData$,
      (data: any) => {
        console.log(data);
        this.data = data;
      }
    );
    this.listenerHandler.handleListeners(document, 'click', () => {
      console.log('hello');
    });
    this.sharedService.getData();
  }
}
