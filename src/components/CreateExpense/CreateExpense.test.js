import React from 'react';
import renderer from 'react-test-renderer';

import CreateExpense from './index';

test('Validate snapshot of create expense', ()=> {
    const props = {};
    const tree = renderer.create(
        <CreateExpense {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
})

test('Validate form', ()=> {
    const props = {};
    const root = renderer.create(
        <CreateExpense {...props} />
    ).root;
    const txtCategory = root.findAllByProps({name: 'category'});
    console.log(txtCategory)    
})