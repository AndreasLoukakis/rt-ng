import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder  } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private returnTo: string;
  othername: FormControl = new FormControl('Asta Napan')
  // formData: FormGroup = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // })
  formData: FormGroup;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      username: ['asdfasdf', [Validators.required]],
      password: ['2345', [Validators.required]]
    })
    this.returnTo = this.route.snapshot.queryParams['returnTo'] || '/inbox';
  }

  login() {
    console.log(this.formData)
    this.auth.login();
    this.router.navigate([this.returnTo]);
  }

}
