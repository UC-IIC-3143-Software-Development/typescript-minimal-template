import { AccountObjectMother } from './AccountObjectMother';

test('should create an account using the builder', function () {
  const account = AccountObjectMother.validAccountWithEmptyTransactions();
  expect(account.getBalance()).toBe(0);
});
