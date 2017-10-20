import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

import { TimeSpan, Transaction, HistorySpan } from '../shared/history.model';

@Component({
    selector: 'app-history-range',
    templateUrl: './history-range.component.html',
    styleUrls: ['./history-range.component.scss']
})
export class HistoryRangeComponent {
    title = 'History - ';
    today: number = Date.now();
    sampleHistoryData: HistorySpan;
    currentTimespan: TimeSpan;
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.sampleHistoryData = { 
            name: 'Jan', 
            timespan: {
                start: null,
                end: null,
            },
            transactions: [
                { id: 9, name: 'Roll', date: Date.now(), amount: 44, category: 'Game' }
            ]
        };
    }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            // read query string parameters
            let startDate = +params['start'] || 0;
            let endDate = +params['end'] || 0;
            this.currentTimespan = new TimeSpan();
            this.currentTimespan.start = new Date(startDate);
            this.currentTimespan.end = new Date(endDate)
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getSampleMonthlyHistory() {
        return this.sampleHistoryData;
    }
}
