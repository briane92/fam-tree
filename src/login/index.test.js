/**
 * Created by beggl on 12/6/2017.
 */
import 'raf/polyfill'
import React from 'react'
import ReactDOM from 'react-dom';
import {SigninForm} from './index'
import {mount} from 'enzyme'
import {Button} from 'semantic-ui-react'

describe('Signup component', ()=>{

    test('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<SigninForm/>, div)
    })


    test('Login function is called when submit button is clicked', ()=>{
        const mockSigninFunction = jest.fn();
        const mockHistoryObject = {push: jest.fn()}

        mockSigninFunction.mockReturnValue({then: jest.fn()})
        const signinForm = mount(<SigninForm mutate={mockSigninFunction} history={mockHistoryObject}/>);
        expect(signinForm.find('Form').length).toBe(1)
        signinForm.find('Form').simulate('submit', {preventDefault(){}})
        expect(mockSigninFunction).toHaveBeenCalled()
        expect(mockHistoryObject.push).toHaveBeenCalled()
    })
})

