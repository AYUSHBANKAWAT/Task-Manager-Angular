import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {Task} from './task.model'
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';


@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent,DatePipe]
})
export class TaskComponent {
  @Input({required:true})task!:Task
  @Output() completed = new EventEmitter<string>();
  private taskService = inject(TaskService)

  taskCompleted(){
    this.taskService.deleteUserTask(this.task.id)
    
  }

}
