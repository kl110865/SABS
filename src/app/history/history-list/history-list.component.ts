import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Month, Transaction } from '../shared/history.model';

@Component({
    selector: 'app-history-list',
    templateUrl: './history-list.component.html',
    styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent {
    title = 'History List';
    today: number = Date.now();
    sampleHistoryData: Array<Month>;

    constructor() {
        this.sampleHistoryData = [
            { id: 1, month: 'Jan', transactions: [] },
            { id: 2, month: 'Feb', transactions: [] },
            { id: 3, month: 'Mar', transactions: [] },
            { id: 4, month: 'Apr', transactions: [] },
            { id: 5, month: 'May', transactions: [] },
            { id: 6, month: 'Jun', transactions: [] },
            { id: 7, month: 'Jul', transactions: [] },
            { id: 8, month: 'Aug', transactions: [] },
            { id: 9, month: 'Sep', transactions: [] },
        ];
    }

    getSampleMonthlyHistory() {
        return this.sampleHistoryData;
    }
}
