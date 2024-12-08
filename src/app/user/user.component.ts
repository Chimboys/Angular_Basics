import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {User} from './user.model';
import {CardComponent} from '../shared/card/card.component';

const randomIndex  = Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>(); //allows for event binding (select)



  //public method to access path of image
  get imagePath(){
    return "assets/users/" + this.user.avatar;
  };

  onSelectUser (){
    this.select.emit(this.user.id); //to pass back the value to parent component
  }
}
