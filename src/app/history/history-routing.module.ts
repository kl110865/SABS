import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryListComponent } from './history-list/history-list.component';

const historyRoutes: Routes = [
    { path: 'history',  component: HistoryListComponent }
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
