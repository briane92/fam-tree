/**
 * Created by beggl on 12/9/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Card } from 'semantic-ui-react'
import MemberPage from './memberpage'
import {graphql} from 'react-apollo'
import {Link} from 'react-router-dom'
import gql from 'graphql-tag'


const MemberCard = ({r}) =>
    <Card>
        <Card.Content>
            <Link to={{pathname:`/members/${r.id}`}}><i className="fa fa-user fa-5x" aria-hidden="true"/></Link>
            <Card.Header>
                {r.name}
            </Card.Header>
            <Card.Meta>
                {r.relation}
            </Card.Meta>
            <Card.Description>
                {shortenBio(r.bio)}
            </Card.Description>
        </Card.Content>
    </Card>


const shortenBio = (bio) => {
    if(bio && bio.length > 100) {
        return bio.substr(0, 100);
    }else{
        return bio
    }
}


MemberCard.query =
    `name
    relation
    bio`

MemberCard.propTypes = {
    r: PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string,
        bio: PropTypes.string,
    }).isRequired
}

const MemberCardGrid = ({mems}) =>
    <Card.Group>
        {mems.map(m => <MemberCard key={m.id} r={m} />)}
    </Card.Group>


MemberCardGrid.propTypes = {
    mems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string})).isRequired
}

MemberCardGrid.query = gql `query allMembers($userName: String!){
        allMembers(userName:$userName) {
            ${MemberCard.query}
            }
         }`

MemberCardGrid.defaultProps = {
    mems: [
        {
            id: 0,
            name: "Brian",
            relation: "Self"
        },
        {
            id:1,
            name: "Lashelle",
            relation: "Mother"
        },
        {
            id:2,
            name: "Brooke",
            relation: "Sister"
        }]
}

const MemberCardGridWithData = ({data}) => {
    console.log(data)
    if(data.loading)
        return(<div>
            <p>Loading....</p>
        </div>)
    return (
        <MemberCardGrid mems={data.allMembers}/>
    )
}


const MemberGridWithData =  graphql(MemberCardGrid.query, {options:({userName}) => ({ variables:{userName}})})(MemberCardGridWithData)

export default MemberGridWithData