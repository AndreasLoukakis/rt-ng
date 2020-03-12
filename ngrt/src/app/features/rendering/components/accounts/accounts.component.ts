import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  @Input() urls: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
