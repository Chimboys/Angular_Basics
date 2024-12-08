import { Component, Input } from '@angular/core';
import {TaskComponent} from './task/task.component'; //no need to add .ts at the end
import {Task} from './task/task.model';
import {NewTaskComponent} from './new-task/new-task.component';
import {taskDataToAddTask} from './new-task/new-task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
})
export class TasksComponent {
  @Input({required:true}) idOfSelectedUser!: string;
  @Input({required:true})  name: string | undefined;
  public isAddingTask:boolean = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.idOfSelectedUser);
  }

  onCompleteTask(idOfTask: string) {
    this.taskService.removeTaskById(idOfTask)
  }

  onClickAddTask(){
    this.isAddingTask = true
  }

  onCancelAddTask(){
    this.isAddingTask = false
  }

  onAddNewTask(newTask: taskDataToAddTask){

    this.taskService.addTaskToTask(newTask, this.idOfSelectedUser,)
    this.onCancelAddTask()
  }

}
