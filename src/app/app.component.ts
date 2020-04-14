import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-oidc-client';
  isLoggedIn: boolean;
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    return this.authService.getCurrentUser().then(user => this.user = user);
  }

  logOff() {
    return this.authService.logOut();
  }

  logIn() {
    return this.authService.startAuthentication();
  }

  revokeAccessToken() {
    return this.authService.revokeAccessToken().then(() => {
        console.log("Revoke success")
    })
    .catch(err => console.error(err));
  }

  silentRenew() {
    return this.authService.renew().then(user => {
      this.user = user;
    })
    .catch(err => {
      this.user = err.error;
      console.error(err)
    });
  }
}
