import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostInterface } from '../../types/post.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule, ButtonComponent ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() posts: PostInterface[] = [];
  @Input() post!: any;
  @Output() editButtonClick = new EventEmitter<Event>();
  @Output() deleteButtonClick = new EventEmitter<number>();
  @Output() createButtonClick = new EventEmitter<Event>();

  handleCreateButton(event: Event): void {
    this.createButtonClick.emit(event);
  }

  handleDeleteButton() {
    this.deleteButtonClick.emit(this.post.id);
  }

  handleEditButton(event: Event): void {
    this.editButtonClick.emit(event);
  }
}
