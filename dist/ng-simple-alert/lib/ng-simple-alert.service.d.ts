import { Subject } from 'rxjs';
export interface AlertMessage {
    prefix: string;
    message: string;
    color: string;
}
export declare class NgSimpleAlertService {
    constructor();
    alertMessage$: Subject<AlertMessage>;
    createSuccessAlert(message: string): void;
    createDangerAlert(message: string): void;
    createWarningAlert(message: string): void;
    createInfoAlert(message: string): void;
    private createAlertMessage;
}
