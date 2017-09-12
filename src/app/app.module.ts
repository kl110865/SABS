import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountComponent} from './account/account.component';
import { AccountDetailsComponent } from './account/account-details/account-details.component';
import { AccountSummaryComponent } from './account/account-summary/account-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountDetailsComponent,
    AccountSummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'account-details',
        component: AccountDetailsComponent
      },
      {
        path: 'account-summary',
        component: AccountSummaryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
