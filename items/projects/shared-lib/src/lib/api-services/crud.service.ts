import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {List} from "../models/list.model";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _list: List[] = [
        {id: 'id-1', name: 'item-1', options: {isItem: true}},
        {id: 'id-2', name: 'item-2', options: {isItem: false}},
        {id: 'id-3', name: 'item-3', options: {isItem: true}}
      ];

  public createList(list: List[]): Observable<{status: number}> {
    this._list = list;
    return of({status: 200})
  }
  public readList(): Observable<List[]> {
    return of(this._list)
  }
  public readListItem(id: string): Observable<Item> {
    let itemShort: List = this._list.find(item => item.id === id);
    let item: Item = null;
    if (itemShort) {
      item = {id: itemShort.id, name: itemShort.name, date: new Date().toISOString(), description: 'test item: ' + itemShort.name} ;
    }
    return of(item)
  }
  public updateList(list: List[]): Observable<List[]> {
    this._list = list;
    return of(this._list)
  }
  public deleteList(): Observable<{status: number}> {
    this._list = null;
    return of({status: 200})
  }
}
