/**
 * Created by beggl on 12/3/2017.
 */
import React, {Component} from 'react'
import {Button, Form } from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter, Redirect } from 'react-router'



class SigninForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName:"",
            password:"",
            isAuthenticated:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.login = this.login.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        this.login()

      //this is hacky
       this.props.history.push('/')

    }

    handleUserName(event){
        this.setState({userName:event.target.value})
    }

    handlePassword(event){
        this.setState({password:event.target.value})
    }

    login = async() => {
        const auth = {userName: this.state.userName, password: this.state.password}
        await this.props.mutate({
            variables: {auth: auth}
        }).then( ({data}) =>{
            console.log(data)
           // this.setState({isAuthenticated:true})
            localStorage.setItem('jwt', data.signin.token)
            localStorage.setItem('userName', data.signin.user)
        })
    }

    render() {

        if(this.state.isAuthenticated){
            return <Redirect to='/members' />
        }else{
            return (
                <div className="center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Username</label>
                            <input type="text" onChange={this.handleUserName} value={this.state.userName}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="text" onChange={this.handlePassword} value={this.state.password}/>
                        </Form.Field>
                        <Button type='submit' color='black'>Sign in</Button>
                    </Form>
                </div>
            )
        }
    }
}



const signinMutation = gql `
    mutation signin($auth: AuthData){
        signin(auth:$auth){
            token
            user
        }
    }`

const SigninWithData = graphql(signinMutation,{
    options: {
        refetchQueries:['allMembers']
    }
})(SigninForm)
const SigninWithDataWithRouter = withRouter(SigninWithData)
export {SigninForm, SigninWithDataWithRouter}