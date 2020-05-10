import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Movie } from './../../interfaces';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  @Input() movie: Movie;
  showDetails: boolean = false;
  previewCollections: string[] = ['species', 'starships', 'vehicles', 'characters', 'planets'];

  dropDownOpen = false;
  @ViewChild('actionsDropdown') actionsDropdown: ElementRef<any>;
  documentClicks$: Observable<Event> = fromEvent(document, 'click');
  clickSubscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  getIdFromUrl(url: string): string {
    const parts = url.split('/');
    // wtf? => to handle empty string, if url ends in /
    // js ftw :P
    return parts.pop() || parts.pop();
  }

  toggleDropdown() {
    this.dropDownOpen = !this.dropDownOpen;
    // if open, add document.eventlistener for off-element click
    if (this.dropDownOpen) {
      this.clickSubscription = this.documentClicks$.subscribe(this.offClicks.bind(this))

    } else {
      if (this.clickSubscription) {
        this.clickSubscription.unsubscribe();
      }
    }
  }

  offClicks(event) {
    if (!this.actionsDropdown.nativeElement.contains(event.target)) {
      this.dropDownOpen = false;
      // if strategy is onPush, we need this in this case
      // Why? probably because the event listener runs outside our scope (I thing)
      this.cdRef.detectChanges();
      if (this.clickSubscription) {
        this.clickSubscription.unsubscribe();
      }
    }
  }

}
