/**
 * Created by beggl on 10/24/2017.
 */
import React from 'react'
import renderer from 'react-test-renderer'
import {Event} from './index'


it('Event component renders correct', ()=> {
    let e = {
        title: "Bud's Births",
        date: new Date(1992, 10, 29),
        description: "Lashelle gave birth to her first son Bud",
    }
    const tree = renderer.create(
        <Event e={e}/>
    ).toJSON()
    expect(tree).toMatchSnapshot()
})