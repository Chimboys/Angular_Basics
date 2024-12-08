import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from './task.model';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';

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
  @Output() complete = new EventEmitter<string>();

  emitCompleteEvent(){
    this.complete.emit(this.taskProp.id);
  }

}
