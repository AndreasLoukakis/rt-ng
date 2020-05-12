import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from './../../services/state.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.state.update({ subRouteActive: true });
  }

  ngOnDestroy() {
    this.state.update({ subRouteActive: false });
  }

}
