import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  httpOptions = {     headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' })   };

  constructor(private httpclient: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  goHome() { 
    if ($(".username").val() == "admin" && $(".password").val() == "123456") {
      this.route.navigate(['/home']);
    }
  }
}
