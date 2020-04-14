import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-oidc-client';
  isLoggedIn: boolean;
  user: Object;

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.authService.getuser().then(user => {
      this.user = user;
    })
  }

  logOff() {
    return this.authService.logOut();
  }

  logIn() {
    return this.authService.startAuthentication();
  }

  silentRenew() {
    return this.authService.renew().then(user => {
      this.user = user;
    })
  }
}
