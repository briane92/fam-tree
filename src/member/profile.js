/**
 * Created by beggl on 11/14/2017.
 */
import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import { Dimmer, Loader, Segment, Button, Header , Label} from 'semantic-ui-react'
import {ProfileEditWithDataWithRouter} from './profileedit'
import './profile.css'

const BioSection = ({bio}) => {
   if(bio){
        return (
            <div>
                <h2>Biography</h2>
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
                <div className='center'>
                    <Header size='huge'>
                        <Header.Content>
                            {member.name}
                        </Header.Content>
                        <Button
                            onClick={()=> this.setState({edit: true})}
                            color='grey'
                            floated='right'>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </Button>
                        <Header.Subheader>
                            <Label as='a' color='black' ribbon>Relation</Label>
                            {member.relation}
                        </Header.Subheader>
                    </Header>
                    <BioSection bio={member.bio}/> <br/>

                </div>
            )
        } else {
            console.log(member)
            return (<ProfileEditWithDataWithRouter member={member} />)
        }
    }

}





export {Profile, ProfileDisplay}