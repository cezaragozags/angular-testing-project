import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:string;
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  updateTask(): void{
    this.edit.emit(this.task);
  }

  deleteTask(): void{
    this.delete.emit(this.task);
  }




}
