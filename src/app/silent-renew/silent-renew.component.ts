import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silent-renew',
  templateUrl: './silent-renew.component.html',
  styleUrls: ['./silent-renew.component.less']
})
export class SilentRenewComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.manager.signinSilentCallback();
    this.router.navigateByUrl('/');//Route back to index
  }

}
