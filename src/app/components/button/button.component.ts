import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Input() icon: 'edit' | 'delete' | 'create' = 'edit';
  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
