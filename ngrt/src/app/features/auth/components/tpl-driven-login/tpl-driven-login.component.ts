import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-driven-login',
  templateUrl: './tpl-driven-login.component.html',
  styleUrls: ['./tpl-driven-login.component.scss']
})
export class TplDrivenLoginComponent implements OnInit {

  // for initialization:
  user = {
    username: 'astanapan',
    password: 'pass'
  }
  constructor() { }

  ngOnInit(): void {
  }

  login(data: any) {
    console.log(data);
    console.log(this.user)
  }

}
