import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLoggedIn = false;
  userName:string;

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = !user ? false : true;
      if(this.isLoggedIn){
        this.userName=user.email;
        this.isLoggedIn=true
      }
      else{
        this.userName='Sign In / Sign Up';
        this.isLoggedIn=false
      }
    })
  }
  onLogout(){
    this.authService.logout();
  }
}
