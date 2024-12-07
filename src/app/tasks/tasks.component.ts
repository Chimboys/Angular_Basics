import { Component, Input } from '@angular/core';
import {TaskComponent} from './task/task.component'; //no need to add .ts at the end
import {Task} from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
})
export class TasksComponent {
  @Input({required:true}) idOfSelectedUser!: string;
  @Input({required:true})  name: string | undefined;
  dummyTasks:Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.dummyTasks.filter((task: Task) => task.userId === this.idOfSelectedUser);
  }

  onCompleteTask(idOfTask: string) {
    this.dummyTasks = this.dummyTasks.filter((task: Task) => task.id !== idOfTask);
  }

}
