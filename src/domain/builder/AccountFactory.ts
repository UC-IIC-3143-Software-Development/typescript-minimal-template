import Account from '../entity/Account';
import AccountBuilder from './AccountBuilder';

export class AccountFactory {
  static validAccountWithEmptyTransactions(): Account {
    return new AccountBuilder('11.111.11-1')
      .setBank('Banco de Chile')
      .setBranch('Providencia')
      .setAccount('123456-7')
      .build();
  }
  static validAccountOriginWithEmptyTransactions(): Account {
    return new AccountBuilder('11.111.11-1')
      .setBank('Banco de Chile')
      .setBranch('Providencia')
      .setAccount('123456-7')
      .build();
  }

  static validAccountDestinationWithEmptyTransactions(): Account {
    return new AccountBuilder('11.111.11-1')
      .setBank('Banco de Chile')
      .setBranch('Providencia')
      .setAccount('123456-7')
      .build();
  }
}
