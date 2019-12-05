/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { NgSimpleAlertService } from './ng-simple-alert.service';
var NgSimpleAlertComponent = /** @class */ (function () {
    function NgSimpleAlertComponent(alertService) {
        this.alertService = alertService;
        this.close$ = new Subject();
    }
    /**
     * @return {?}
     */
    NgSimpleAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
    };
    /**
     * @return {?}
     */
    NgSimpleAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.close$.next();
    };
    NgSimpleAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'acf-ng-simple-alert',
                    template: "\n    <div class=\"alert\" *ngIf=\"(alertMessage$ | async) as alertMessage\" [ngStyle]=\"{background: alertMessage.color}\">\n        <span class=\"closebtn\" (click)=\"closeAlert()\">&times;</span>\n        <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}\n    </div>\n  ",
                    styles: ['./ng-simple-alert.component.css']
                }] }
    ];
    /** @nocollapse */
    NgSimpleAlertComponent.ctorParameters = function () { return [
        { type: NgSimpleAlertService }
    ]; };
    return NgSimpleAlertComponent;
}());
export { NgSimpleAlertComponent };
if (false) {
    /** @type {?} */
    NgSimpleAlertComponent.prototype.alertMessage$;
    /** @type {?} */
    NgSimpleAlertComponent.prototype.close$;
    /**
     * @type {?}
     * @private
     */
    NgSimpleAlertComponent.prototype.alertService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9uZy1zaW1wbGUtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBZ0Isb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRTtJQWVFLGdDQUFvQixZQUFrQztRQUFsQyxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFGdEQsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFMEIsQ0FBQzs7OztJQUUzRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsd1NBS1Q7NkJBQ1EsaUNBQWlDO2lCQUMzQzs7OztnQkFYc0Isb0JBQW9COztJQTJCM0MsNkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQWZZLHNCQUFzQjs7O0lBRWpDLCtDQUFrRDs7SUFDbEQsd0NBQWdDOzs7OztJQUVwQiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFsZXJ0TWVzc2FnZSwgTmdTaW1wbGVBbGVydFNlcnZpY2UgfSBmcm9tICcuL25nLXNpbXBsZS1hbGVydC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNmLW5nLXNpbXBsZS1hbGVydCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0XCIgKm5nSWY9XCIoYWxlcnRNZXNzYWdlJCB8IGFzeW5jKSBhcyBhbGVydE1lc3NhZ2VcIiBbbmdTdHlsZV09XCJ7YmFja2dyb3VuZDogYWxlcnRNZXNzYWdlLmNvbG9yfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlYnRuXCIgKGNsaWNrKT1cImNsb3NlQWxlcnQoKVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDxzdHJvbmc+e3sgYWxlcnRNZXNzYWdlLnByZWZpeCB9fSE8L3N0cm9uZz4ge3sgYWxlcnRNZXNzYWdlLm1lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbJy4vbmctc2ltcGxlLWFsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZUFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbGVydE1lc3NhZ2UkOiBPYnNlcnZhYmxlPEFsZXJ0TWVzc2FnZSB8IGJvb2xlYW4+O1xuICBjbG9zZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBOZ1NpbXBsZUFsZXJ0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkID0gbWVyZ2UodGhpcy5hbGVydFNlcnZpY2UuYWxlcnRNZXNzYWdlJCwgdGhpcy5jbG9zZSQpO1xuICB9XG5cbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlJC5uZXh0KCk7XG4gIH1cblxufVxuIl19