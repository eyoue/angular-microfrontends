import { Component, OnInit } from '@angular/core';
import {List, CrudService} from "shared-lib-test";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  template: `
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let l of $list | async" (click)="about(l.id)">{{ l.name }}</li>
      </ul>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {

  public $list: Observable<List[]>;

  constructor(private crudService: CrudService, private router: Router) {
  }

  ngOnInit(): void {
    this.read()
  }

  read() {
    this.$list = this.crudService.readList();
  }

  // ...

  about(id: string) {
    this.router.navigate(['/items'], {queryParams: {id: id}})
  }
}
