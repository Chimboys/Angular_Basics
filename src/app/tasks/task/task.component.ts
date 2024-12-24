import {Component, Input, inject} from '@angular/core';
import {Task} from './task.model';
;
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',

  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: false,
})
export class TaskComponent {
  @Input() taskProp! : Task;

  private taskService = inject(TasksService)
  onCompleteEvent(){
    this.taskService.removeTaskById(this.taskProp.id)
  }

}
