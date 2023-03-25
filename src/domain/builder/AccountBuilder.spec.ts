import { AccountFactory } from './AccountFactory';

test('should create an account and do a credit transfer', function () {
  // Given
  const account = AccountFactory.validAccountWithEmptyTransactions();
  const amountCreditTransfer = 1000;

  // When
  account.credit(amountCreditTransfer);

  // Then
  expect(account.getBalance()).toBe(amountCreditTransfer);
});

test('should create an account and do a credit and debit transfer', function () {
  // Given
  const account = AccountFactory.validAccountWithEmptyTransactions();
  const amountCreditTransfer = 1000;
  const amountDebitTransfer = 500;

  // When
  account.credit(amountCreditTransfer);
  account.credit(amountDebitTransfer);

  // Then
  const expectedBalanceAmount = 500;
  expect(account.getBalance()).toBe(expectedBalanceAmount);
});
