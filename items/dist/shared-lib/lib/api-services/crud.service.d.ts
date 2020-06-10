import { Observable } from "rxjs";
import { List } from "../models/list.model";
import { Item } from "../models/item.model";
import * as ɵngcc0 from '@angular/core';
export declare class CrudService {
    private _list;
    createList(list: List[]): Observable<{
        status: number;
    }>;
    readList(): Observable<List[]>;
    readListItem(id: string): Observable<Item>;
    updateList(list: List[]): Observable<List[]>;
    deleteList(): Observable<{
        status: number;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CrudService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNydWQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi4vbW9kZWxzL2xpc3QubW9kZWxcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvaXRlbS5tb2RlbFwiO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDcnVkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9saXN0O1xyXG4gICAgY3JlYXRlTGlzdChsaXN0OiBMaXN0W10pOiBPYnNlcnZhYmxlPHtcclxuICAgICAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIH0+O1xyXG4gICAgcmVhZExpc3QoKTogT2JzZXJ2YWJsZTxMaXN0W10+O1xyXG4gICAgcmVhZExpc3RJdGVtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEl0ZW0+O1xyXG4gICAgdXBkYXRlTGlzdChsaXN0OiBMaXN0W10pOiBPYnNlcnZhYmxlPExpc3RbXT47XHJcbiAgICBkZWxldGVMaXN0KCk6IE9ic2VydmFibGU8e1xyXG4gICAgICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgfT47XHJcbn1cclxuIl19