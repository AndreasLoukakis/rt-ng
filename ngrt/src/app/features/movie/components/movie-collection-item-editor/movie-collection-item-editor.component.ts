import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-collection-item-editor',
  templateUrl: './movie-collection-item-editor.component.html',
  styleUrls: ['./movie-collection-item-editor.component.scss']
})
export class MovieCollectionItemEditorComponent implements OnInit {


  @Output() itemSave: EventEmitter<any> = new EventEmitter();
  @Output() itemCancel: EventEmitter<any> = new EventEmitter();

  @Input() item$: Observable<any>;
  @Input() type$: Observable<string>;
  @Input() props$: Observable<{ value: string, label: string, validations?: string[] }[]>;

  formData: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    combineLatest(this.item$, this.props$).subscribe(
      ([item, props]) => {
        // create an object formated for fb
        const fbData = props.reduce((all, cur) => {
          const itemValidations = [this.noGreekCharacters];
          if (cur.validations) {
            cur.validations.map(v => {
              if (Validators[v]) itemValidations.push(Validators[v])
            })
          }
          all[cur.value] = [item[cur.value], itemValidations]
          return all;
        }, {})

        this.formData = this.fb.group(fbData);

        // react to form or specific input changes
        // and do things normally done via a directive
        // this.formData.valueChanges.subscribe( ... )
        this.formData.get('name')?.valueChanges.subscribe(
          val => {
            if (val === 'kostas' || val === 'konstantina') {
              window.alert('xronia polla!!')
            }
            if (val === 'addField') {
              this.formData.addControl('foo', new FormControl('init val'))
            }
          }
        )
      }
    )
  }

  // Add some custom validation, or put them in a seperate file
  // and add them to angular Validators via the injection token
  // https://angular.io/api/forms/NG_VALIDATORS
  noGreekCharacters(c: FormControl) {
    return !/[α-ωΑΩ]/.test(c.value) ? null : {
      noGreek: {
        valid: false
      }
    };
  }

  save(item) {
    this.itemSave.emit(item)
  }

  cancel() {
    this.itemCancel.emit();
  }

}
