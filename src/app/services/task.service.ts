import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() {}

  getTasks(): string[]{
    const storedTasks = localStorage.getItem(this.storageKey);
    let tasks : string[] = [];
    if (storedTasks){
      tasks = JSON.parse(storedTasks) as string[];
    }
    return tasks;
  }

  saveTask(task:string):void{
    let tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.storageKey,JSON.stringify(tasks));
  }

  updateTask(oldTask:string, newTask:string): void{
    let tasks = this.getTasks();
    const index = tasks.indexOf(oldTask);
    if(index !== -1){
      tasks[index]=newTask;
      localStorage.setItem(this.storageKey,JSON.stringify(tasks));
    }
  }

  deleteTask(task:string):void{
    let tasks = this.getTasks();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem(this.storageKey,JSON.stringify(tasks));
  }
}
