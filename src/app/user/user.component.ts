import { Component, signal, computed } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  //creating accessor/getter
  // get imagePath() {
  //     return "assets/users/" + this.selectedUser().avatar;
  //   }

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  //method that will run on (click) = "onSelectedUser"
  onSelectUser(){
    const newRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[newRandomIndex]);

  }
}
