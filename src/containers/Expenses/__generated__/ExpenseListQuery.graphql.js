/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExpenseListItem_viewer$ref = any;
export type ExpenseListQueryVariables = {||};
export type ExpenseListQueryResponse = {|
  +expenses: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ExpenseListItem_viewer$ref
  |}>
|};
export type ExpenseListQuery = {|
  variables: ExpenseListQueryVariables,
  response: ExpenseListQueryResponse,
|};
*/


/*
query ExpenseListQuery {
  expenses {
    ...ExpenseListItem_viewer
    id
  }
}

fragment ExpenseListItem_viewer on Expense {
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
    "name": "ExpenseListQuery",
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
            "name": "ExpenseListItem_viewer"
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
    "name": "ExpenseListQuery",
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
    "cacheID": "ff016485f1fa27214caf4f58ae3d918f",
    "id": null,
    "metadata": {},
    "name": "ExpenseListQuery",
    "operationKind": "query",
    "text": "query ExpenseListQuery {\n  expenses {\n    ...ExpenseListItem_viewer\n    id\n  }\n}\n\nfragment ExpenseListItem_viewer on Expense {\n  id\n  category\n  amount\n  date\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '524ce7308fe8682affd7514fb25899e6';

module.exports = node;
