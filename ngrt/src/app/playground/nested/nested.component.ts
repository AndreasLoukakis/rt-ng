import { Component, OnInit, ElementRef, ContentChild, QueryList, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';
import { Router, Data, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit, AfterViewInit {

  data: Data;
  moreData: any;

  @ViewChild('bindMe') img: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // one instance of the component
    console.log('nested instance created')
  }

  // this needs to execute to a different stage of the component creation
  ngAfterViewInit() {
    this.img.nativeElement.style.border = "4px solid blue";
  }


  ngOnInit(): void {

    // this will only run once, when component gets instantiated
    this.data = this.route.snapshot.data;

    // When the instance of the cmp is created, we will NOT listen to this event, it has already been fired.
    // so first time we click the route, nothing happens
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      // this will work
      this.data = this.route.snapshot.data;
      // and we can also pass some route state from the routerlink
      const navigation = this.router.getCurrentNavigation();
      this.data = navigation.extras.state ?? this.data;

    });

  }

}
