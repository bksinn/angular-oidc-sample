import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authSerivce: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authSerivce.startAuthentication();
  }

}
