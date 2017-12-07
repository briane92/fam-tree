/**
 * Created by beggl on 11/17/2017.
 */
import React from 'react'
import renderer from 'react-test-renderer'
import {shallow, mount, render} from 'enzyme'
import {Profile} from './profile'


describe('<Profile />', () => {
    test('render bio when there is one', ()=> {
        const member =  {name:'Jane Doe', relation: 'Mother', bio: 'Jane Doe was born blah blah blah'}
        const wrapper = shallow(<Profile member={member} />)
        const bio = wrapper.find('p')
        expect(bio.text()).toBe(member.bio)
    })

    test('renders add bio button when there no bio', () => {
        const member = {name:"Jane Doe", relation: 'Mother'}
        const wrapper = shallow(<Profile member={member} />)
        const button = wrapper.find('button')
        expect(button.text()).toBe('Add Bio')
    })

})
