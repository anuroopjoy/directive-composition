import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from '../style.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StyleDirective],
})
export class ChildComponent {
  color = '';
  weight = '';

  showAlert() {
    alert('hello');
  }
}
