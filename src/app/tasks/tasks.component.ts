import { Component, Input } from '@angular/core';
import {TaskComponent} from './task/task.component'
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private taskService:TaskService){}
  @Input({required:true}) userId!:string
  @Input({required:true}) name!:string
  isAddingTask:boolean = false
  //private taskService = new TaskService()
  

  onCompleteTask(id:string){
    this.taskService.deleteUserTask(id)
  }
  
  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId) 
  }

  onAddTask(){
    this.isAddingTask=true
  }

  onCancelTask(task:boolean){
    this.isAddingTask=task
  }

  onAddingTask(taskData:NewTask){
    this.taskService.addUserTask(taskData,this.userId)
    this.isAddingTask=false
  }

}
