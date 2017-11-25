/**
 * Created by beggl on 11/14/2017.
 */
import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import {ProfileEditWithData} from './profileedit'

const BioSection = ({bio}) => {
   if(bio){
        return (
            <div>
                <h2>Bio</h2>
                <p>{bio}</p>
            </div>)
    } else {
       return null
   }
}


const profileQuery = gql `
    query getMember($id: Int!) {
        member(id:$id) {
            id
            name
            relation
            bio
        }
    }`

const ProfileDisplay = ({match}) => {
    const id = parseInt(match.params.id, 10)
    console.log(id)
    const config = {
        options: {variables: {id:id}},
        props: ({data:{loading, member} }) => ({member, loading})
    }
    const ProfileData = graphql(profileQuery, config)(Profile);

    return <ProfileData/>
}


class Profile  extends Component {

    constructor (props) {
        super(props)
        this.state = {edit: false}
    }


    render(){
        const {member, loading} = this.props
        const {edit}  = this.state
        console.log(edit)
        if (loading) {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </Segment>
            )
        }
        if (!edit) {
            return (
                <div>
                    <h1> {member.name} </h1>
                    <h2> {member.relation} </h2>
                    <BioSection bio={member.bio}/>
                    <button onClick={()=> this.setState({edit: true})}>Edit</button>
                </div>
            )
        } else {
            console.log(member)
            return (<ProfileEditWithData member={member} />)
        }
    }

}





export {Profile, ProfileDisplay}