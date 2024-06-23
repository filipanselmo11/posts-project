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
  @Output() editButtonClick = new EventEmitter<Event>();
  @Output() deleteButtonClick = new EventEmitter<any>();
  @Output() addButtonClick = new EventEmitter<Event>();
  @Input() post!: any;

  handleAddButton() {
    this.addButtonClick.emit();
  }

  handleDeleteButton() {
    this.deleteButtonClick.emit(this.post.id);
  }

  handleEditButton() {
    this.editButtonClick.emit();
  }
}
