import { Component, Input } from '@angular/core';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: false,
})
export class TasksComponent {
  @Input({required:true}) idOfSelectedUser!: string;
  @Input({required:true})  name: string | undefined;
  public isAddingTask:boolean = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.idOfSelectedUser);
  }


  onClickAddTask(){
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask = false
  }


}
