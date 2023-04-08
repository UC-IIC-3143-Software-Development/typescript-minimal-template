import { AccountObjectMother } from '../builder/AccountObjectMother';
import TransferService from '../service/TransferService';
import CreditCommand from '../../useCase/transfer/command/CreditCommand';

test('should create an account and do a credit transfer', function () {
  // Given
  const account = AccountObjectMother.validAccountWithEmptyTransactions();
  const amountCreditTransfer = 1000;

  // When
  const creditCommand = new CreditCommand(account, amountCreditTransfer);
  creditCommand.execute();

  // Then
  expect(account.getBalance()).toBe(amountCreditTransfer);
});

test('should create an account and do a credit and debit transfer', function () {
  // Given
  const account = AccountObjectMother.validAccountWithEmptyTransactions();
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
  const accountFrom =
    AccountObjectMother.validAccountOriginWithEmptyTransactions();
  const accountTo =
    AccountObjectMother.validAccountDestinationWithEmptyTransactions();
  const amountCreditTransfer = 1000;
  const amountDebitTransfer = 500;

  // When
  const creditCommandFrom = new CreditCommand(
    accountFrom,
    amountCreditTransfer,
  );
  creditCommandFrom.execute();

  const creditCommandTo = new CreditCommand(accountFrom, 500);
  creditCommandTo.execute();

  accountTo.executeCreditTransfer(amountDebitTransfer);
  const transferService = new TransferService();
  transferService.transfer(accountFrom, accountTo, 700);

  // Then
  expect(accountFrom.getBalance()).toBe(800);
  expect(accountTo.getBalance()).toBe(1200);
});
