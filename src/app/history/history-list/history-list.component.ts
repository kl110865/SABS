import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HistorySpanSummary, Transaction } from '../shared/history.model';

@Component({
    selector: 'app-history-list',
    templateUrl: './history-list.component.html',
    styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent {
    title = 'History List';
    today: number = Date.now();
    sampleHistoryData: Array<HistorySpanSummary>;

    constructor() {
        this.sampleHistoryData = [
            { name: 'Jan', timespan: {start: null, end: null}, sum: 100 },
            { name: 'Feb', timespan: {start: null, end: null}, sum: 200 },
            { name: 'Mar', timespan: {start: null, end: null}, sum: 300 },
            { name: 'Apr', timespan: {start: null, end: null}, sum: 400 },
            { name: 'May', timespan: {start: null, end: null}, sum: 500 },
            { name: 'Jun', timespan: {start: null, end: null}, sum: 100 },
            { name: 'Jul', timespan: {start: null, end: null}, sum: 200 },
            { name: 'Aug', timespan: {start: null, end: null}, sum: 300 },
            { name: 'Sep', timespan: {start: null, end: null}, sum: 400 }
        ];
    }

    getSampleMonthlyHistory() {
        return this.sampleHistoryData;
    }
}
