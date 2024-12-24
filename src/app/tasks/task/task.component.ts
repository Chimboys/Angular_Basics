import {Component, Input, inject} from '@angular/core';
import {Task} from './task.model';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: true,
})
export class TaskComponent {
  @Input() taskProp! : Task;

  private taskService = inject(TasksService)
  onCompleteEvent(){
    this.taskService.removeTaskById(this.taskProp.id)
  }

}
