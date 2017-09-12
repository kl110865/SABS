import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

const accountRoutes: Routes = [
  {
    path: 'account',
    children: [
            {
                path: 'account-details',
                component: AccountDetailsComponent
            },
            {
                path: 'account-summary',
                component: AccountSummaryComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
export class AccountRoutingModule { }
