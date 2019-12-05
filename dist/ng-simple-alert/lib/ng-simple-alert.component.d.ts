import { OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertMessage, NgSimpleAlertService } from './ng-simple-alert.service';
export declare class NgSimpleAlertComponent implements OnInit {
    private alertService;
    alertMessage$: Observable<AlertMessage | boolean>;
    close$: Subject<boolean>;
    constructor(alertService: NgSimpleAlertService);
    ngOnInit(): void;
    closeAlert(): void;
}
