import { Component } from '@angular/core';

@Component({
  selector: 'catalog-root',
  template: `      
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'catalog';
}
