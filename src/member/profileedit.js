/**
 * Created by beggl on 11/24/2017.
 */
import React, {Component} from 'react'
import {RelationshipSelector} from '../relationship'
import {graphql} from 'react-apollo'
import {updateMemberMutation} from '../api/member'

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
    }

    handleBio(event) {
        let newMember = {...this.state.member, bio: event.target.value}
        console.log(newMember)
        this.setState( { member: newMember})
    }

    handleName(event){
        let newMember = {...this.state.member, name: event.target.value}
        console.log(event.target.value)
        this.setState({member: newMember})
    }

    handleRelation(event){
        this.setState({relation:event.target.value})
    }

    updateMember = async() => {
        const input = {
            name: this.state.member.name,
            bio: this.state.member.bio,
            relation: this.state.member.relation
        }

        const test = this.getMemberInput()
      await this.props.mutate({
            variables: {id: this.state.member.id, input: test}
        })
    }

    getMemberInput() {
        const {name, bio, relation}  = this.state.member
        return {name:name, bio:bio, relation:relation}
    }



    render(){
        const member = this.state.member
        console.log(member)
        console.log(this.props)
        console.log(this.props.member)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleName}  value={this.state.member.name}/> <br />
                <RelationshipSelector onChange={this.handleRelation} value={this.state.member.relation} /> <br />
                <textarea onChange={this.handleBio} value={this.state.member.bio} />
                <button type='submit'>Submit </button>
            </form>
        )
    }
}

const ProfileEditWithData = graphql(updateMemberMutation)(ProfileEdit)

export {ProfileEditWithData}
