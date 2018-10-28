import { Component, OnInit } from '@angular/core';
import { HEROES } from './heroes';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes = HEROES;
  heroesPagination: Hero[];

  ngOnInit(): void {
    this.heroesPagination = this.heroes.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.heroesPagination = this.heroes.slice(startItem, endItem);
  }
}


