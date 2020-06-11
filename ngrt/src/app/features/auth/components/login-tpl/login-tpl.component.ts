import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-tpl',
  templateUrl: './login-tpl.component.html',
  styleUrls: ['./login-tpl.component.scss']
})
export class LoginTplComponent implements OnInit {

  user = {
    username: 'Apostolis',
    password: '789'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log('formdata', data);
    console.log('user data', this.user);
  }

}
