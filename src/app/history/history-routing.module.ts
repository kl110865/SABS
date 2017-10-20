import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryRangeComponent } from './history-range/history-range.component';

const historyRoutes: Routes = [
    { path: 'history',  component: HistoryListComponent },
    { path: 'history/detail', component: HistoryRangeComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(historyRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HistoryRoutingModule { }
