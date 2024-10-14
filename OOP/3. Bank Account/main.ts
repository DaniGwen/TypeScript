class bankAccount {
    private id: number = 0;
    private balance: number = 0;
    private interestRate: number = 0.02;

    constructor(id: number) {
        this.id = id;
    }

    public setInterestRate(interest: number) {
        this.interestRate = interest;
    }

    public getInterest(years: number) {
        console.log((this.interestRate * years * this.balance).toFixed(2));
    }

    public deposit(deposite: number) {
        this.balance = deposite + this.balance;
        console.log(`Deposited ${deposite} to ID${this.id}`);
    }

    public GetId(): number {
        return this.id;
    }
}

class TestClient {
    private accounts: bankAccount[] = [];

    public GetAccounts(): Array<bankAccount> {
        return this.accounts;
    }

    public create() {
        let accountId = this.accounts.length + 1;
        this.accounts.push(new bankAccount(accountId));
        console.log(`Account ID${accountId} created`)
    }

    public deposit(id: number, amount: number) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].GetId() === id) {
                this.accounts[i].deposit(amount);
                return;
            }
        }

        console.log("Account does not exist");
    }

    public setInterest(interest: number) {
        this.accounts.forEach(x => x.setInterestRate(interest));
    }

    public getInterest(accountId: number, years: number) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].GetId() === accountId) {
                this.accounts[i].getInterest(years);
                return;
            }
        }

        console.log("Account does not exist");
    }
}

let client = new TestClient();
client.create();
client.create();
client.deposit(1, 20);
client.deposit(3, 20);
client.deposit(2, 10);
client.setInterest(1.5);
client.getInterest(1, 1);
client.getInterest(2, 1);
client.getInterest(3, 1);