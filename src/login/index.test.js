/**
 * Created by beggl on 12/6/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {SigninForm} from './index'
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'


describe('Signup component', ()=>{

    test('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<SigninForm/>, div)
    })


    test('Login function is called when submit button is clicked', () =>{
        const mockSigninFunction = jest.fn();
        const signinForm = mount(<SigninForm signin={mockSigninFunction} />);
        signinForm.simulate('submit')
        expect(mockSigninFunction.mock.calls.length).toBe(1)
    })
})

