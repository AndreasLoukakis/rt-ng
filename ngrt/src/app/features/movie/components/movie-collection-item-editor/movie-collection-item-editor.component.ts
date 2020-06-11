import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
          const itemValidations = [];
          if (cur.validations) {
            cur.validations.map(v => {
              if (Validators[v]) itemValidations.push(Validators[v])
            })
          }
          all[cur.value] = [item[cur.value], itemValidations]
          return all;
        }, {})

        this.formData = this.fb.group(fbData);
      }
    )
  }

  save(item) {
    this.itemSave.emit(item)
  }

  cancel() {
    this.itemCancel.emit();
  }

}
