import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskItemComponent, FormsModule]
})
export class TaskListComponent implements OnInit{
[x: string]: any;

  tasks: string[] = [];
  newTask: string = '';
  editTask: string = '';
  oldTask: string = '';

  constructor(private taskService: TaskService) {
    console.log('TaskListComponent initialized');
  }
  
  ngOnInit(): void {
    this.tasks=this.taskService.getTasks(); //actualiza la lista en la vista

  }

  addTask(task: string) {
    console.log('Adding task:', task);
    if (task.length > 0){
      this.taskService.saveTask(task);
      this.newTask="";
      this.tasks=this.taskService.getTasks();
    }
  }

  updateTask(task:string) {
    this.editTask=task;
    this.oldTask=task;
  }

  deleteTask(task: string) {
    this.taskService.deleteTask(task);
    this.tasks=this.taskService.getTasks();
  }

  saveEditedTask(){
    if(this.oldTask !== this.editTask){
      this.taskService.updateTask(this.oldTask, this.editTask); //Actualiza la lista en el local storage
      this.tasks=this.taskService.getTasks(); //actualiza la lista en la vista
      this.editTask=""; //limpia el input dejandolo vacio
    }
  }

  

}
