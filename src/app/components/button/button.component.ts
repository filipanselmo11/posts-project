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
  @Input() iconClass!: string;
  @Output() buttonClick = new EventEmitter();

  handleClick(): void {
    this.buttonClick.emit();
  }
}
