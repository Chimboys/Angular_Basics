import { Component } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {taskDataToAddTask} from './new-task.model';



@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: true,
})
export class NewTaskComponent {
  @Output() cancelAddingTaskEvent = new EventEmitter<void>()
  @Output() addTaskEvent = new EventEmitter<taskDataToAddTask>()
  public enteredTitle:string = "";
  public enteredSummary:string = "";
  public enteredDate:string = "";

  onCancel(){
    this.cancelAddingTaskEvent.emit();
  }

  onSubmit(){
    this.addTaskEvent.emit({title:this.enteredTitle, summary:this.enteredSummary, date:this.enteredDate});
  }


}
