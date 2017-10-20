import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HistoryRoutingModule } from './history-routing.module';

import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryRangeComponent } from './history-range/history-range.component';

@NgModule({
    declarations: [
        HistoryListComponent,
        HistoryRangeComponent
    ],
    imports: [
        BrowserModule,
        HistoryRoutingModule
    ],
    providers: []
})
export class HistoryModule { }
