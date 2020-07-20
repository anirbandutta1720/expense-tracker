/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExpenseList_viewer$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +expenses: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ExpenseList_viewer$ref
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  expenses {
    ...ExpenseList_viewer
    id
  }
}

fragment ExpenseList_viewer on Expense {
  id
  category
  amount
  date
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Expense",
        "kind": "LinkedField",
        "name": "expenses",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExpenseList_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "ExpenseQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Expense",
        "kind": "LinkedField",
        "name": "expenses",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "02f066b8d87e96d4c56063e6e0a5b8f3",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  expenses {\n    ...ExpenseList_viewer\n    id\n  }\n}\n\nfragment ExpenseList_viewer on Expense {\n  id\n  category\n  amount\n  date\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd0948fa050a29717717cf732bd2f048e';

module.exports = node;
