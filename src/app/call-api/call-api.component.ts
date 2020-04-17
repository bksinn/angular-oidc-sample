import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.less']
})
export class CallApiComponent implements OnInit {
  response: Object;

  constructor(private http: HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    let headers = new HttpHeaders({ 'Authorization': this.authService.getAuthorizationHeaderValue() });

    this.http.get("https://localhost:44350/test", {headers: headers}).subscribe(
      res => {
        console.log({res});
        this.response = res
      },
      err => console.error(err)
    )
  }

}
