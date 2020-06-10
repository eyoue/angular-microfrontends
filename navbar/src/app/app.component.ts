import { Component } from '@angular/core';

@Component({
  selector: 'navbar-root',
  template: `      
    <fieldset>
      <router-outlet></router-outlet>
    </fieldset>
  `,
  styles: []
})
export class AppComponent {
  title = 'navbar';
}
