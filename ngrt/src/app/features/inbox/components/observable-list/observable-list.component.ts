import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Movie } from './../../../../shared/interfaces'
import { Observable, fromEvent, Subject } from 'rxjs'
import { shareReplay } from 'rxjs/operators';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrls: ['./observable-list.component.scss']
})
export class ObservableListComponent implements OnInit, AfterViewInit {

  items$: Observable<Movie[]>
  items: Movie[];
  @ViewChild('myButton') btn: ElementRef<HTMLButtonElement>;

  subClick$: Subject<any> = new Subject();

  clicks$: Observable<Event>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {



    this.items$ = this.dataService.getMoviesAsObservable()
      .pipe(shareReplay());
    // this.dataService.getMoviesAsObservable().subscribe(
    //   data => this.items = data
    // )

    // const subscription = this.dataService.getMoviesAsObservable()
    //   .pipe(
    //     map(....)
    //   )
      // .subscribe(
      //   data => this.items = data
      // )
  }

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.btn.nativeElement, 'click');

    this.clicks$.subscribe({
      next: event => console.log(event)
    })
  }

}
