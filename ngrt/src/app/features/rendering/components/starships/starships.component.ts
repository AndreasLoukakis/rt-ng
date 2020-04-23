import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Starship } from '../../../../shared/models';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  @Input() data: Starship[];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
  }

}
