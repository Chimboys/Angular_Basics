import { Component, signal, computed , Input, input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex  = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
})
export class UserComponent {
  // @Input({required: true})  avatar!:string; //instead of props , use inputs
  // @Input({required: true})  name!:string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed<string>( () => {
    return "assets/users/" + this.avatar()
  })
  onSelectUser (){}
}
