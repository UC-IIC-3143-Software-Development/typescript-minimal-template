import Account from '../entity/Account';

export default class TransferService {
  transfer(from: Account, to: Account, amount: number) {
    from.executeDebitTransfer(amount);
    to.executeCreditTransfer(amount);
  }
}
