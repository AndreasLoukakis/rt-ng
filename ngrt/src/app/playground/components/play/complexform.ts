import { Component, OnInit, Input, SimpleChange, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-form',
  templateUrl: './complexform.html',
  styleUrls: ['./play.component.scss']
})
export class ItemFormComponent implements OnInit {

  middleName = new FormControl('asf', [Validators.pattern(/[0-9 ]/g), Validators.required]);

  myComplexData: FormGroup;

  formChanges$: Observable<any>;

  get formAddresses() {
    return this.myComplexData.get('addresses') as FormArray;
  }

  myData = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('Skywalker'),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    })
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.myComplexData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['Skywalker'],
      addresses: this.fb.array([
        this.fb.group({
          type: ['home'],
          street: ['home street'],
          city: ['Athens']
        }),
        this.fb.group({
          type: ['work'],
          street: ['work street'],
          city: ['Athens']
        })
      ])
    });

    this.formChanges$ = this.myComplexData.valueChanges.pipe(
      map(changes => changes.firstName)
    )
  }

  onSubmit(data) {
    console.log('data is ', data);
  }

}
