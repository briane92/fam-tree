/**
 * Created by beggl on 11/14/2017.
 */
import React, {Component} from 'react'
import {Loading} from '../uiComponents'
import {ProfileEditWithDataWithRouter as ProfileEdit} from './profileEdit'
import {Profile} from './profile'
import './profile.css'

class ProfileContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {edit: false}
    }

    render(){

        const {member, loading} = this.props
        const {edit}  = this.state

        if (loading) {
            return <Loading />
        }

        let profileSection = null

        if (!edit) {
            profileSection = <Profile member={member} />
        } else {
            profileSection = <ProfileEdit member={member} />
        }
        return {profileSection}
    }
}


const ProfileDisplay = ({match}) => {
    const id = parseInt(match.params.id, 10)
    const config = {
        options: {variables: {id:id}},
        props: ({data:{loading, member} }) => ({member, loading})
    }
    const ProfileWithData = graphql(Profile.query, config)(ProfileContainer);
    return <ProfileWithData/>
}

export {ProfileDisplay}