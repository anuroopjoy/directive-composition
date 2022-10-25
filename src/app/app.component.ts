import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ChildComponent, CommonModule],
})
export class AppComponent {
  title = 'perf-app';
  showChild = true;

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
