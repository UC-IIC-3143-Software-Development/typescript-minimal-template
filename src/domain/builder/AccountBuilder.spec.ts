import { AccountFactory } from './AccountFactory';
import TransferService from '../service/TransferService';

test('should create an account and do a credit transfer', function () {
  // Given
  const account = AccountFactory.validAccountWithEmptyTransactions();
  const amountCreditTransfer = 1000;

  // When
  account.executeCreditTransfer(amountCreditTransfer);

  // Then
  expect(account.getBalance()).toBe(amountCreditTransfer);
});

test('should create an account and do a credit and debit transfer', function () {
  // Given
  const account = AccountFactory.validAccountWithEmptyTransactions();
  const amountCreditTransfer = 1000;
  const amountDebitTransfer = 500;

  // When
  account.executeCreditTransfer(amountCreditTransfer);
  account.executeCreditTransfer(amountDebitTransfer);

  // Then
  const expectedBalanceAmount = 1500;
  expect(account.getBalance()).toBe(expectedBalanceAmount);
});

test('should create two accounts and do a transfer between them', function () {
  // Given
  const accountFrom = AccountFactory.validAccountOriginWithEmptyTransactions();
  const accountTo =
    AccountFactory.validAccountDestinationWithEmptyTransactions();
  const amountCreditTransfer = 1000;
  const amountDebitTransfer = 500;

  // When
  accountFrom.executeCreditTransfer(amountCreditTransfer);
  accountTo.executeCreditTransfer(amountDebitTransfer);
  const transferService = new TransferService();
  transferService.transfer(accountFrom, accountTo, 700);

  // Then
  expect(accountFrom.getBalance()).toBe(300);
  expect(accountTo.getBalance()).toBe(1200);
});
