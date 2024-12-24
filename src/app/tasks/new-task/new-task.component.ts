import {Component, Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {taskDataToAddTask} from './new-task.model';
import {TasksService} from "../tasks.service"

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false,
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>()
  @Input({required:true}) selectedUserId!:string;

  public enteredTitle:string = "";
  public enteredSummary:string = "";
  public enteredDate:string = "";

  constructor(private taskService: TasksService) {}

  createTaskViaService(){
    this.taskService.addTaskToTask({title:this.enteredTitle, summary:this.enteredSummary, date:this.enteredDate}, this.selectedUserId)
    this.close.emit();
  }
  onCancel(){
    this.close.emit();
  }




}
