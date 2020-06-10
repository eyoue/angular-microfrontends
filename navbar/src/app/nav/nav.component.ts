import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
      <ul class="nav navbar-nav">
        <li class="active"><a routerLink="/">Main</a></li>
        <li><a routerLink="/catalog">Catalog</a></li>
        <li><a routerLink="/items">Item</a></li>
      </ul>
  `,
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
