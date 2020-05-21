import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { FormBuilder, FormsModule, Validators, FormGroup, FormControl } from '@angular/forms';

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

  @ViewChild('extraField') xtraField: ElementRef;

  ngOnInit(): void {
    combineLatest(this.item$, this.props$).subscribe(
      ([item, props]) => {

        const fbObj = props.reduce((all, cur) => {
          const validations = [this.noGreekCharacters];
          if (cur.validations) {
            cur.validations.map(val => {
              if (Validators[val]) {
                validations.push(Validators[val])
              }
            })
          }
          all[cur.value] = [item[cur.value], validations]
          return all;
        }, {})

        this.formData = this.fb.group(fbObj)

        this.formData.get('name')?.valueChanges.subscribe(
          val => {
            // if (val === 'kostantina') {
            //   window.alert('xronnia poolla')
            // }
            if (val === 'euro') {
              this.formData.addControl('isotimia', new FormControl('whatever'))
            }
          },

        )
      }
    )
  }

  noGreekCharacters(fc: FormControl) {
    const regex = /[α-ωΑ-Ω]/;
    return regex.test(fc.value) ? {
      noGreek: {
        valid: false
      }
    } : null;
  }

  save(item) {
    this.itemSave.emit(item);
  }
  cancel() {
    this.itemCancel.emit();
  }



}
