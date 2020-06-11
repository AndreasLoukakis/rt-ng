import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnTo: string;

  lastName: FormControl = new FormControl('My last name', [Validators.required]);
  myFormData: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.returnTo = this.route.snapshot.queryParams['returnTo'] || '/play';

    // this.myFormData = new FormGroup({
    //   username: new FormControl('initial name', Validators.required),
    //   password: new FormControl('my init pass')
    // });

    const fbData = Object.keys(this.getData()).reduce((all, cur) => {
      all[cur] = [this.getData()[cur]];
      return all;
    }, {});

    this.myFormData = this.fb.group(fbData);

  }

  onLogin() {
    console.log(this.myFormData.value)
    // this.auth.login();
    // this.router.navigate([this.returnTo]);
  }

  getData() {
    return {
      username: 'foo man',
      password: '777'
    }
  }

}
