import { reduce } from "rxjs/operators";
import { Account, AccountRaw } from "@ledgerhq/types-live";
import { fromAccountRaw } from "../../account";
import { getAccountBridge } from "../../bridge";
import "../../__tests__/test-helpers/setup";
import BigNumber from "bignumber.js";

const accountRaw: AccountRaw = {
  id: "js:2:stellar:GAS5NQ2VU6LA3QPDSCVBH66IHP2RE52VFCLFQKSGRF7VKMZA2KTLGI3M:sep5",
  seedIdentifier:
    "25d6c355a7960dc1e390aa13fbc83bf51277552896582a46897f553320d2a6b3",
  name: "Ledger Dev",
  starred: false,
  used: true,
  derivationMode: "sep5",
  index: 0,
  freshAddress: "GAS5NQ2VU6LA3QPDSCVBH66IHP2RE52VFCLFQKSGRF7VKMZA2KTLGI3M",
  freshAddressPath: "44'/148'/0'",
  freshAddresses: [
    {
      address: "GAS5NQ2VU6LA3QPDSCVBH66IHP2RE52VFCLFQKSGRF7VKMZA2KTLGI3M",
      derivationPath: "44'/148'/0'",
    },
  ],
  blockHeight: 1,
  creationDate: "2022-12-25T01:16:28.000Z",
  operationsCount: 1,
  operations: [],
  pendingOperations: [],
  currencyId: "stellar",
  unitMagnitude: 7,
  lastSyncDate: "2023-05-16T03:09:20.259Z",
  balance: "0",
  spendableBalance: "0",
};

async function syncAccount(initialAccount: Account): Promise<Account> {
  const acc = await getAccountBridge(initialAccount)
    .sync(initialAccount, {
      paginationConfig: {},
    })
    .pipe(reduce((a, f: (arg0: Account) => Account) => f(a), initialAccount))
    .toPromise();
  return acc;
}

test("check spendable balance", async () => {
  let account = fromAccountRaw(accountRaw);
  account = await syncAccount(account);
  const fee = new BigNumber("100");
  // You can get the spenaable balance here
  // https://stellar.expert/explorer/public/account/GAS5NQ2VU6LA3QPDSCVBH66IHP2RE52VFCLFQKSGRF7VKMZA2KTLGI3M
  expect(account.spendableBalance).toEqual(
    new BigNumber("12485598").minus(fee)
  );
});
