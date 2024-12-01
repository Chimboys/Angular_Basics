import {Component, EventEmitter, Input, output, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex  = Math.floor(Math.random() * DUMMY_USERS.length);

interface User  {
  name: string;
  id: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
})
export class UserComponent {
  @Input() user!:User;
  @Output() select = new EventEmitter<string>(); //allows for event binding (select)


  //public method to access path of image
  get imagePath(){
    return "assets/users/" + this.user.avatar;
  };

  onSelectUser (){
    this.select.emit(this.user.id); //to pass back the value to parent component
  }
}
