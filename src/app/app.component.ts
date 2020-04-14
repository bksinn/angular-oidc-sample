import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('userInfo', {static: false}) userInfo: ElementRef;
  title = 'angular-oidc-client';
  isLoggedIn: boolean;
  user: Object;

  constructor(private authService: AuthService) {
    //console.log(this.authService.manager.getUser());

    this.getCurrentUser();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

  }

  getCurrentUser():Promise<any> {
    return this.authService.manager.getUser().then(
      user => {
        this.user = user
      });
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
    }).catch(err => {
      this.user = err.error;
      console.error(err)
    });
  }
}
