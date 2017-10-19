import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Account } from '../shared/shared.model';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {
  title = 'SABS';
  today: number = Date.now();
  sampleAccountData: Array<Account>;

  constructor() {
    this.sampleAccountData = [
      { id: 1, name: 'MCD', date: Date.now(), amount: 200, category: 'Food' },
      { id: 2, name: 'Mall', date: Date.now(), amount: 100, category: 'Food' },
      { id: 3, name: 'Roll', date: Date.now(), amount: 44, category: 'Game' },
      { id: 4, name: 'Roll', date: Date.now(), amount: 60, category: 'Game' },
      { id: 5, name: 'Roll', date: Date.now(), amount: 44, category: 'Game' },
      { id: 6, name: 'Roll', date: Date.now(), amount: 10, category: 'Game' },
      { id: 7, name: 'Roll', date: Date.now(), amount: 80, category: 'Game' },
      { id: 8, name: 'Roll', date: Date.now(), amount: 44, category: 'Game' },
      { id: 9, name: 'Roll', date: Date.now(), amount: 44, category: 'Game' },
    ];
  }

  getSampleAccountDate() {
    return this.sampleAccountData;
  }

  clickAddNewRecord(event: Event, newDate: number, newName: string, newAmount: number, newCategory: string) {
    event.stopPropagation();
    event.preventDefault();
    this.sampleAccountData.push({
      id: this.sampleAccountData.length, name: newName, date: newDate, amount: newAmount, category: newCategory
    });
  }
}
