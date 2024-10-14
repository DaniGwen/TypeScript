var bankAccount = /** @class */ (function () {
    function bankAccount(id) {
        this.id = 0;
        this.balance = 0;
        this.interestRate = 0.02;
        this.id = id;
    }
    bankAccount.prototype.setInterestRate = function (interest) {
        this.interestRate = interest;
    };
    bankAccount.prototype.getInterest = function (years) {
        console.log((this.interestRate * years * this.balance).toFixed(2));
    };
    bankAccount.prototype.deposit = function (deposite) {
        this.balance = deposite + this.balance;
        console.log("Deposited ".concat(deposite, " to ID").concat(this.id));
    };
    bankAccount.prototype.GetId = function () {
        return this.id;
    };
    return bankAccount;
}());
var TestClient = /** @class */ (function () {
    function TestClient() {
        this.accounts = [];
    }
    TestClient.prototype.GetAccounts = function () {
        return this.accounts;
    };
    TestClient.prototype.create = function () {
        var accountId = this.accounts.length + 1;
        this.accounts.push(new bankAccount(accountId));
        console.log("Account ID".concat(accountId, " created"));
    };
    TestClient.prototype.deposit = function (id, amount) {
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].GetId() === id) {
                this.accounts[i].deposit(amount);
                return;
            }
        }
        console.log("Account does not exist");
    };
    TestClient.prototype.setInterest = function (interest) {
        this.accounts.forEach(function (x) { return x.setInterestRate(interest); });
    };
    TestClient.prototype.getInterest = function (accountId, years) {
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].GetId() === accountId) {
                this.accounts[i].getInterest(years);
                return;
            }
        }
        console.log("Account does not exist");
    };
    return TestClient;
}());
var client = new TestClient();
client.create();
client.create();
client.deposit(1, 20);
client.deposit(3, 20);
client.deposit(2, 10);
client.setInterest(1.5);
client.getInterest(1, 1);
client.getInterest(2, 1);
client.getInterest(3, 1);
