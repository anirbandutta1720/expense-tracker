/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateExpenseInput = {|
  category?: ?string,
  amount?: ?number,
  date?: ?string,
|};
export type CreateExpenseMutationVariables = {|
  input: CreateExpenseInput
|};
export type CreateExpenseMutationResponse = {|
  +addExpense: ?{|
    +category: ?string,
    +amount: ?number,
    +date: ?string,
  |}
|};
export type CreateExpenseMutation = {|
  variables: CreateExpenseMutationVariables,
  response: CreateExpenseMutationResponse,
|};
*/


/*
mutation CreateExpenseMutation(
  $input: CreateExpenseInput!
) {
  addExpense(input: $input) {
    category
    amount
    date
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateExpenseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Expense",
        "kind": "LinkedField",
        "name": "addExpense",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateExpenseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Expense",
        "kind": "LinkedField",
        "name": "addExpense",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6f874c855f4d9ef7b1b1a04ee56ae05c",
    "id": null,
    "metadata": {},
    "name": "CreateExpenseMutation",
    "operationKind": "mutation",
    "text": "mutation CreateExpenseMutation(\n  $input: CreateExpenseInput!\n) {\n  addExpense(input: $input) {\n    category\n    amount\n    date\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a68bd0ca7ec53f26deda4e01188e16a1';

module.exports = node;
