import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private returnTo: string;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.returnTo = this.route.snapshot.queryParams.returnTo || '/inbox';
  }

  login() {
    this.auth.login();
    this.router.navigate([this.returnTo]);
  }

}
