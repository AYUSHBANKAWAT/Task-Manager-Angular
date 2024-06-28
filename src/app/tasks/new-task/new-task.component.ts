import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string 
  @Output() cancelTask = new EventEmitter<boolean>()
  @Output() submitTask = new EventEmitter<NewTask>()
  private taskSerice = inject(TaskService)
  enteredTitle=''
  enteredSummary = ''
  enteredDate = ''
  onCancel(){
    this.cancelTask.emit(false);
  }
  onSubmit(){
    this.taskSerice.addUserTask(
      {
        title:this.enteredTitle,
        summary:this.enteredSummary,
        date:this.enteredDate
      },this.userId
    )
    this.cancelTask.emit(false)
  }
}
