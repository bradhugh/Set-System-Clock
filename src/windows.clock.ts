import { IDateTimeControl } from './shared';

import { exec } from 'child_process';
import * as dateFormat from 'dateformat';
import * as windosu from 'windosu';

export default class WindowsDateTimeControl implements IDateTimeControl {
    public setDateTime(dateTime: Date, options: any) {
        let sudo = options.useSudo ? 'sudo ' : '';

        let performExec: (command: string) => void = sudo ? windosu.exec : exec;

        performExec(`date ${dateFormat(dateTime, 'm/d/yyyy')}`);
        performExec(`time ${dateFormat(dateTime, 'HH:MM:ss')}`);
    }
}