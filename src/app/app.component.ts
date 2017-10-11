import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  user = new User();
  lastUser;
  success = false;
  onSubmit() {
    this.lastUser = this.user;
    this.user = new User();
    this.success = true;
	}	
}
