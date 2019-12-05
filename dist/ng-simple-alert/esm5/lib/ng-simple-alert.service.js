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
var NgSimpleAlertService = /** @class */ (function () {
    function NgSimpleAlertService() {
        this.alertMessage$ = new Subject();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createSuccessAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createDangerAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createWarningAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createInfoAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    };
    /**
     * @private
     * @param {?} prefix
     * @param {?} message
     * @param {?} color
     * @return {?}
     */
    NgSimpleAlertService.prototype.createAlertMessage = /**
     * @private
     * @param {?} prefix
     * @param {?} message
     * @param {?} color
     * @return {?}
     */
    function (prefix, message, color) {
        return { prefix: prefix, message: message, color: color };
    };
    NgSimpleAlertService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgSimpleAlertService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgSimpleAlertService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
    return NgSimpleAlertService;
}());
export { NgSimpleAlertService };
if (false) {
    /** @type {?} */
    NgSimpleAlertService.prototype.alertMessage$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zaW1wbGUtYWxlcnQvIiwic291cmNlcyI6WyJsaWIvbmctc2ltcGxlLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFL0Isa0NBSUM7OztJQUhDLDhCQUFlOztJQUNmLCtCQUFnQjs7SUFDaEIsNkJBQWM7O0FBR2hCO0lBS0U7UUFFTyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO0lBRm5DLENBQUM7Ozs7O0lBSVYsaURBQWtCOzs7O0lBQXpCLFVBQTBCLE9BQWU7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7OztJQUVNLGdEQUFpQjs7OztJQUF4QixVQUF5QixPQUFlO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFTSxpREFBa0I7Ozs7SUFBekIsVUFBMEIsT0FBZTtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBRU0sOENBQWU7Ozs7SUFBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7Ozs7O0lBRU8saURBQWtCOzs7Ozs7O0lBQTFCLFVBQTJCLE1BQWMsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUN2RSxPQUFPLEVBQUMsTUFBTSxRQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkEzQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBWEQ7Q0FxQ0MsQUE1QkQsSUE0QkM7U0F6Qlksb0JBQW9COzs7SUFJL0IsNkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0TWVzc2FnZSB7XG4gIHByZWZpeDogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlQWxlcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBhbGVydE1lc3NhZ2UkID0gbmV3IFN1YmplY3Q8QWxlcnRNZXNzYWdlPigpO1xuXG4gIHB1YmxpYyBjcmVhdGVTdWNjZXNzQWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkLm5leHQodGhpcy5jcmVhdGVBbGVydE1lc3NhZ2UoJ1N1Y2Nlc3MnLCBtZXNzYWdlLCAnZ3JlZW4nKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRGFuZ2VyQWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkLm5leHQodGhpcy5jcmVhdGVBbGVydE1lc3NhZ2UoJ0RhbmdlcicsIG1lc3NhZ2UsICdyZWQnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlV2FybmluZ0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdXYXJuaW5nJywgbWVzc2FnZSwgJ2RhcmtvcmFuZ2UnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlSW5mb0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdJbmZvJywgbWVzc2FnZSwgJ2RvZGdlcmJsdWUnKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUFsZXJ0TWVzc2FnZShwcmVmaXg6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogQWxlcnRNZXNzYWdlIHtcbiAgICByZXR1cm4ge3ByZWZpeCwgbWVzc2FnZSwgY29sb3J9O1xuICB9XG59XG4iXX0=