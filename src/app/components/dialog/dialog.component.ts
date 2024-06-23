import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() isVisible = false;
  @Output('close-modal') closeModal = new EventEmitter();

  close () {
    this.closeModal.emit();
  }
}
