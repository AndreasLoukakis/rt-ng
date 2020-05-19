import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private returnTo: string;

  // otherName: FormControl;
  formData: FormGroup;
  fromHttp = {
    username: 'asdf',
    password: '100'
  }

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.otherName = new FormControl('my other name')
    // this.formData = new FormGroup({
    //   username: new FormControl('Andreas', Validators.required),
    //   password: new FormControl('123', Validators.required)
    // })
    this.formData = this.fb.group({
      username: [this.fromHttp.username, [Validators.required]],
      password: [this.fromHttp.password, [Validators.required, Validators.max(300)]]
    })

    this.returnTo = this.route.snapshot.queryParams.returnTo || '/inbox';
  }

  login() {
    console.log(this.formData.value)
    console.log(this.fromHttp)
    // this.auth.login();
    // this.router.navigate([this.returnTo]);
  }

}
