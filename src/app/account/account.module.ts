import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule
    ],
    declarations: [
        AccountDetailsComponent,
        AccountSummaryComponent
    ]
})
export class AccountModule { }
