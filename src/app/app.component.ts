import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-project';
  isLoggedIn = false;

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = !user ? false : true;
    })

    this.authService.autoLogin();
  }

}
