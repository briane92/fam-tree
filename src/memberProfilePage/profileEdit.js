/**
 * Created by beggl on 11/24/2017.
 */
import './profileEdit.css'
import React, {Component} from 'react'
import {Button, Form } from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import {RelationshipSelector} from '../familyGridPage'


class ProfileEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
            member: props.member
        }
        this.handleBio = this.handleBio.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleRelation = this.handleRelation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateMember = this.updateMember.bind(this)
        this.getMemberInput = this.getMemberInput.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("test")
        this.updateMember()
        this.props.history.go(0)
    }

    handleBio(event) {
        let newMember = {...this.state.member, bio: event.target.value}
        this.setState( { member: newMember})
    }

    handleName(event){
        let newMember = {...this.state.member, name: event.target.value}
        this.setState({member: newMember})
    }

    handleRelation(event){
        let newMember = {...this.state.member, relation: event.target.value}
        this.setState({member:newMember})
    }

    updateMember = async() => {
        const input = this.getMemberInput()
        await this.props.mutate({
            variables: {id: this.state.member.id, input: input}
        })
    }

    getMemberInput() {
        const {name, bio, relation}  = this.state.member
        return {name:name, bio:bio, relation:relation}
    }

    render(){
        const member = this.state.member
        return (
            <div className="center">
                <h1>Editing...</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input type="text" onChange={this.handleName} value={member.name}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Relationship</label>
                        <RelationshipSelector onChange={this.handleRelation} value={member.relation}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Biography</label>
                        <textarea onChange={this.handleBio} value={member.bio}/>
                    </Form.Field>
                    <Button type='submit' color='black'>Save</Button>
                </Form>
            </div>
        )
    }
}

ProfileEdit.mutation = gql 
    `mutation updateMember($id: Int!, $input: MemberInput){
        updateMember(id: $id, input:$input){
            id
        }
    }
`

const ProfileEditWithData = graphql(ProfileEdit.mutation)(ProfileEdit)
const ProfileEditWithDataWithRouter = withRouter(ProfileEditWithData)
export {ProfileEditWithDataWithRouter}
