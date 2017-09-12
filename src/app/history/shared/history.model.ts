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

export class Month {
    id: number;
    month: string;
    transactions: Array<Transaction>;
}
