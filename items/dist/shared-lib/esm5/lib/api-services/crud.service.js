import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from "rxjs";
import * as i0 from "@angular/core";
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
    CrudService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CrudService_Factory() { return new CrudService(); }, token: CrudService, providedIn: "root" });
    CrudService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());
export { CrudService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hcGktc2VydmljZXMvY3J1ZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBT3BDO0lBQUE7UUFFVSxVQUFLLEdBQVc7WUFDbEIsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxFQUFDO1lBQ3JELEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFBQztZQUN0RCxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUM7U0FDdEQsQ0FBQztLQXlCUDtJQXZCUSxnQ0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNNLDhCQUFRLEdBQWY7UUFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNNLGtDQUFZLEdBQW5CLFVBQW9CLEVBQVU7UUFDNUIsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUM7UUFDdEIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLEdBQUcsRUFBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBRTtTQUMvSDtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFDTSxnQ0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBQ00sZ0NBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFBO0lBQzFCLENBQUM7O0lBOUJVLFdBQVc7UUFIdkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFdBQVcsQ0ErQnZCO3NCQXZDRDtDQXVDQyxBQS9CRCxJQStCQztTQS9CWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSBcIi4uL21vZGVscy9saXN0Lm1vZGVsXCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9tb2RlbHMvaXRlbS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDcnVkU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfbGlzdDogTGlzdFtdID0gW1xuICAgICAgICB7aWQ6ICdpZC0xJywgbmFtZTogJ2l0ZW0tMScsIG9wdGlvbnM6IHtpc0l0ZW06IHRydWV9fSxcbiAgICAgICAge2lkOiAnaWQtMicsIG5hbWU6ICdpdGVtLTInLCBvcHRpb25zOiB7aXNJdGVtOiBmYWxzZX19LFxuICAgICAgICB7aWQ6ICdpZC0zJywgbmFtZTogJ2l0ZW0tMycsIG9wdGlvbnM6IHtpc0l0ZW06IHRydWV9fVxuICAgICAgXTtcblxuICBwdWJsaWMgY3JlYXRlTGlzdChsaXN0OiBMaXN0W10pOiBPYnNlcnZhYmxlPHtzdGF0dXM6IG51bWJlcn0+IHtcbiAgICB0aGlzLl9saXN0ID0gbGlzdDtcbiAgICByZXR1cm4gb2Yoe3N0YXR1czogMjAwfSlcbiAgfVxuICBwdWJsaWMgcmVhZExpc3QoKTogT2JzZXJ2YWJsZTxMaXN0W10+IHtcbiAgICByZXR1cm4gb2YodGhpcy5fbGlzdClcbiAgfVxuICBwdWJsaWMgcmVhZExpc3RJdGVtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICBsZXQgaXRlbVNob3J0OiBMaXN0ID0gdGhpcy5fbGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGxldCBpdGVtOiBJdGVtID0gbnVsbDtcbiAgICBpZiAoaXRlbVNob3J0KSB7XG4gICAgICBpdGVtID0ge2lkOiBpdGVtU2hvcnQuaWQsIG5hbWU6IGl0ZW1TaG9ydC5uYW1lLCBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIGRlc2NyaXB0aW9uOiAndGVzdCBpdGVtOiAnICsgaXRlbVNob3J0Lm5hbWV9IDtcbiAgICB9XG4gICAgcmV0dXJuIG9mKGl0ZW0pXG4gIH1cbiAgcHVibGljIHVwZGF0ZUxpc3QobGlzdDogTGlzdFtdKTogT2JzZXJ2YWJsZTxMaXN0W10+IHtcbiAgICB0aGlzLl9saXN0ID0gbGlzdDtcbiAgICByZXR1cm4gb2YodGhpcy5fbGlzdClcbiAgfVxuICBwdWJsaWMgZGVsZXRlTGlzdCgpOiBPYnNlcnZhYmxlPHtzdGF0dXM6IG51bWJlcn0+IHtcbiAgICB0aGlzLl9saXN0ID0gbnVsbDtcbiAgICByZXR1cm4gb2Yoe3N0YXR1czogMjAwfSlcbiAgfVxufVxuIl19