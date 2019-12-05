import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlertMessage() { }
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
    /** @nocollapse */ NgSimpleAlertService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
    return NgSimpleAlertService;
}());
if (false) {
    /** @type {?} */
    NgSimpleAlertService.prototype.alertMessage$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgSimpleAlertModule = /** @class */ (function () {
    function NgSimpleAlertModule() {
    }
    NgSimpleAlertModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgSimpleAlertComponent],
                    imports: [CommonModule],
                    exports: [NgSimpleAlertComponent]
                },] }
    ];
    return NgSimpleAlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgSimpleAlertComponent, NgSimpleAlertModule, NgSimpleAlertService };
//# sourceMappingURL=ng-simple-alert.js.map
