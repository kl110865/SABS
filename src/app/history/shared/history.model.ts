export class Transaction {
    id: number;
    name: string;
    date: number;
    amount: number;
    category: string;

    public constructor(initialValue?: Partial<Transaction>) {
        Object.assign(this, initialValue);
    }
}

export class TimeSpan {
    start: Date;
    end: Date;
}

export class HistorySpan {
    name: string;
    timespan: TimeSpan;
    transactions: Array<Transaction>;
}

export class HistorySpanSummary {
    name: string;
    timespan: TimeSpan;
    sum: number;
}
