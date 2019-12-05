/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { NgSimpleAlertService } from './ng-simple-alert.service';
export class NgSimpleAlertComponent {
    /**
     * @param {?} alertService
     */
    constructor(alertService) {
        this.alertService = alertService;
        this.close$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.close$.next();
    }
}
NgSimpleAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'acf-ng-simple-alert',
                template: `
    <div class="alert" *ngIf="(alertMessage$ | async) as alertMessage" [ngStyle]="{background: alertMessage.color}">
        <span class="closebtn" (click)="closeAlert()">&times;</span>
        <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
    </div>
  `,
                styles: ['./ng-simple-alert.component.css']
            }] }
];
/** @nocollapse */
NgSimpleAlertComponent.ctorParameters = () => [
    { type: NgSimpleAlertService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9uZy1zaW1wbGUtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBZ0Isb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVkvRSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBS2pDLFlBQW9CLFlBQWtDO1FBQWxDLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUZ0RCxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQUUwQixDQUFDOzs7O0lBRTNELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7OztHQUtUO3lCQUNRLGlDQUFpQzthQUMzQzs7OztZQVhzQixvQkFBb0I7Ozs7SUFjekMsK0NBQWtEOztJQUNsRCx3Q0FBZ0M7Ozs7O0lBRXBCLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWxlcnRNZXNzYWdlLCBOZ1NpbXBsZUFsZXJ0U2VydmljZSB9IGZyb20gJy4vbmctc2ltcGxlLWFsZXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhY2Ytbmctc2ltcGxlLWFsZXJ0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnRcIiAqbmdJZj1cIihhbGVydE1lc3NhZ2UkIHwgYXN5bmMpIGFzIGFsZXJ0TWVzc2FnZVwiIFtuZ1N0eWxlXT1cIntiYWNrZ3JvdW5kOiBhbGVydE1lc3NhZ2UuY29sb3J9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VidG5cIiAoY2xpY2spPVwiY2xvc2VBbGVydCgpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPHN0cm9uZz57eyBhbGVydE1lc3NhZ2UucHJlZml4IH19ITwvc3Ryb25nPiB7eyBhbGVydE1lc3NhZ2UubWVzc2FnZSB9fVxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFsnLi9uZy1zaW1wbGUtYWxlcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFsZXJ0TWVzc2FnZSQ6IE9ic2VydmFibGU8QWxlcnRNZXNzYWdlIHwgYm9vbGVhbj47XG4gIGNsb3NlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IE5nU2ltcGxlQWxlcnRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsZXJ0TWVzc2FnZSQgPSBtZXJnZSh0aGlzLmFsZXJ0U2VydmljZS5hbGVydE1lc3NhZ2UkLCB0aGlzLmNsb3NlJCk7XG4gIH1cblxuICBjbG9zZUFsZXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UkLm5leHQoKTtcbiAgfVxuXG59XG4iXX0=