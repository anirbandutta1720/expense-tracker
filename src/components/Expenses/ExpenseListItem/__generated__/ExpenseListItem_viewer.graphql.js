/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExpenseListItem_viewer$ref: FragmentReference;
declare export opaque type ExpenseListItem_viewer$fragmentType: ExpenseListItem_viewer$ref;
export type ExpenseListItem_viewer = {|
  +id: ?string,
  +category: ?string,
  +amount: ?number,
  +date: ?string,
  +$refType: ExpenseListItem_viewer$ref,
|};
export type ExpenseListItem_viewer$data = ExpenseListItem_viewer;
export type ExpenseListItem_viewer$key = {
  +$data?: ExpenseListItem_viewer$data,
  +$fragmentRefs: ExpenseListItem_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExpenseListItem_viewer",
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
  "type": "Expense",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '2d1109c335cdad72c30cc9824567bcb2';

module.exports = node;
