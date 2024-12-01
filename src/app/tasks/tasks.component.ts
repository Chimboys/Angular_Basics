import { Component, Input } from '@angular/core';
import  {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: true,
})
export class TasksComponent {
  @Input()  name: string | undefined;

}
