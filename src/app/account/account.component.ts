import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  title = 'SABS';
  today: number = Date.now();
  sampleAccountData: Array<Account>;

  constructor() {
    this.sampleAccountData = [
      { id: 1, name: 'MCD', date: Date.now(), amount: 200, category: 'Food' },
      { id: 2, name: 'Mall', date: Date.now(), amount: 100, category: 'Food' },
      { id: 3, name: 'Roll', date: Date.now(), amount: 1200, category: 'Game' }
    ];
  }

  getSampleAccountDate() {
    return this.sampleAccountData;
  }
}
