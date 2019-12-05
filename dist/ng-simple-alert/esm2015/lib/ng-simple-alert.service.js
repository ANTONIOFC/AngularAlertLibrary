/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function AlertMessage() { }
if (false) {
    /** @type {?} */
    AlertMessage.prototype.prefix;
    /** @type {?} */
    AlertMessage.prototype.message;
    /** @type {?} */
    AlertMessage.prototype.color;
}
export class NgSimpleAlertService {
    constructor() {
        this.alertMessage$ = new Subject();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createSuccessAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createDangerAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createWarningAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createInfoAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    }
    /**
     * @private
     * @param {?} prefix
     * @param {?} message
     * @param {?} color
     * @return {?}
     */
    createAlertMessage(prefix, message, color) {
        return { prefix, message, color };
    }
}
NgSimpleAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgSimpleAlertService.ctorParameters = () => [];
/** @nocollapse */ NgSimpleAlertService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgSimpleAlertService.prototype.alertMessage$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zaW1wbGUtYWxlcnQvIiwic291cmNlcyI6WyJsaWIvbmctc2ltcGxlLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFL0Isa0NBSUM7OztJQUhDLDhCQUFlOztJQUNmLCtCQUFnQjs7SUFDaEIsNkJBQWM7O0FBTWhCLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0I7UUFFTyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO0lBRm5DLENBQUM7Ozs7O0lBSVYsa0JBQWtCLENBQUMsT0FBZTtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsT0FBZTtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsT0FBZTtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLE9BQWU7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUN2RSxPQUFPLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7O0lBS0MsNkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0TWVzc2FnZSB7XG4gIHByZWZpeDogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlQWxlcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBhbGVydE1lc3NhZ2UkID0gbmV3IFN1YmplY3Q8QWxlcnRNZXNzYWdlPigpO1xuXG4gIHB1YmxpYyBjcmVhdGVTdWNjZXNzQWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkLm5leHQodGhpcy5jcmVhdGVBbGVydE1lc3NhZ2UoJ1N1Y2Nlc3MnLCBtZXNzYWdlLCAnZ3JlZW4nKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRGFuZ2VyQWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkLm5leHQodGhpcy5jcmVhdGVBbGVydE1lc3NhZ2UoJ0RhbmdlcicsIG1lc3NhZ2UsICdyZWQnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlV2FybmluZ0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdXYXJuaW5nJywgbWVzc2FnZSwgJ2RhcmtvcmFuZ2UnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlSW5mb0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdJbmZvJywgbWVzc2FnZSwgJ2RvZGdlcmJsdWUnKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUFsZXJ0TWVzc2FnZShwcmVmaXg6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogQWxlcnRNZXNzYWdlIHtcbiAgICByZXR1cm4ge3ByZWZpeCwgbWVzc2FnZSwgY29sb3J9O1xuICB9XG59XG4iXX0=