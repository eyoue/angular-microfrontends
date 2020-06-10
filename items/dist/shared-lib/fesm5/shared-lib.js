import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import { of } from 'rxjs';

var CrudService = /** @class */ (function () {
    function CrudService() {
        this._list = [
            { id: 'id-1', name: 'item-1', options: { isItem: true } },
            { id: 'id-2', name: 'item-2', options: { isItem: false } },
            { id: 'id-3', name: 'item-3', options: { isItem: true } }
        ];
    }
    CrudService.prototype.createList = function (list) {
        this._list = list;
        return of({ status: 200 });
    };
    CrudService.prototype.readList = function () {
        return of(this._list);
    };
    CrudService.prototype.readListItem = function (id) {
        var itemShort = this._list.find(function (item) { return item.id === id; });
        var item = null;
        if (itemShort) {
            item = { id: itemShort.id, name: itemShort.name, date: new Date().toISOString(), description: 'test item: ' + itemShort.name };
        }
        return of(item);
    };
    CrudService.prototype.updateList = function (list) {
        this._list = list;
        return of(this._list);
    };
    CrudService.prototype.deleteList = function () {
        this._list = null;
        return of({ status: 200 });
    };
    CrudService.ɵprov = ɵɵdefineInjectable({ factory: function CrudService_Factory() { return new CrudService(); }, token: CrudService, providedIn: "root" });
    CrudService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CrudService };
//# sourceMappingURL=shared-lib.js.map
