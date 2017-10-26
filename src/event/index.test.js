/**
 * Created by beggl on 10/24/2017.
 */
import React from 'react'
import renderer from 'react-test-renderer'
import {Event} from './index'


it('Event component renders correct', ()=> {
    let e = {
        title: "Christmas of 1992",
        date: new Date(1992, 11, 25),
        description: "Christmas of 1992 was spent in New York City",
    }

    const component = renderer.create(<Event e={e}/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})