/**
 * Created by beggl on 12/9/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import {shallow, mount, render} from 'enzyme'
import {RelationshipSelector} from './createMember'


describe('<RelationshipSelector/>' , ()=> {
    test('renders without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<RelationshipSelector />, div)
    })


})