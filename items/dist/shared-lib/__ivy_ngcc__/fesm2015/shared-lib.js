import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
let CrudService = class CrudService {
    constructor() {
        this._list = [
            { id: 'id-1', name: 'item-1', options: { isItem: true } },
            { id: 'id-2', name: 'item-2', options: { isItem: false } },
            { id: 'id-3', name: 'item-3', options: { isItem: true } }
        ];
    }
    createList(list) {
        this._list = list;
        return of({ status: 200 });
    }
    readList() {
        return of(this._list);
    }
    readListItem(id) {
        let itemShort = this._list.find(item => item.id === id);
        let item = null;
        if (itemShort) {
            item = { id: itemShort.id, name: itemShort.name, date: new Date().toISOString(), description: 'test item: ' + itemShort.name };
        }
        return of(item);
    }
    updateList(list) {
        this._list = list;
        return of(this._list);
    }
    deleteList() {
        this._list = null;
        return of({ status: 200 });
    }
};
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(); };
CrudService.ɵprov = ɵɵdefineInjectable({ factory: function CrudService_Factory() { return new CrudService(); }, token: CrudService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CrudService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CrudService };

//# sourceMappingURL=shared-lib.js.map