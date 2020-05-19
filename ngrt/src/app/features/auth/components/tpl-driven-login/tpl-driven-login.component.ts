import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-driven-login',
  templateUrl: './tpl-driven-login.component.html',
  styleUrls: ['./tpl-driven-login.component.scss']
})
export class TplDrivenLoginComponent implements OnInit {

  user = {
    username: 'Dimitris',
    password: '123'
  }

  constructor() { }

  ngOnInit(): void {
  }

  sumbit() {
    console.log(this.user);
  }
}
