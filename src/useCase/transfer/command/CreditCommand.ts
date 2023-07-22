import Account from '../../../domain/entity/Account';
import Command from './Command';

export default class CreditCommand implements Command {
  operation = 'credit';

  constructor(
    readonly account: Account,
    readonly amount: number,
  ) {}

  execute(): void {
    this.account.executeCreditTransfer(this.amount);
  }
}
