import { Component, OnInit } from '@angular/core';
import {CrudService, Item} from "shared-lib-test";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-info',
  template: `
      <div class="card">
        <div class="card-body" *ngIf="(item$ | async) as item; else default">
          <div class="card-text">{{item.name}}</div>
          <div class="card-text">{{item.description}}</div>
          <div class="card-text">{{item.date | date: 'hh:mm dd/MM' }}</div>
        </div>
      </div>
    
    <a routerLink="/catalog">to Catalog</a>
    <ng-template #default>
      <div class="card-body">Not data</div>
    </ng-template>
  `,
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  public item$: Observable<Item> = null;

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }

  ngOnInit(): void {
    const itemId = this.route.snapshot.queryParams['id'] as string;
    this.item$ = this.crudService.readListItem(itemId);
  }

}
