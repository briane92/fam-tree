/**
 * Created by beggl on 10/20/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Card } from 'semantic-ui-react'
import MemberPage from './memberpage'
import {graphql} from 'react-apollo'
import {Link} from 'react-router-dom'
import {getAllMembersQuery} from '../api/member'

const MemberCard = ({r}) =>
    <Card>
        <Card.Content>
            <Link to={{pathname:`/members/${r.id}`}}><i className="fa fa-user fa-5x" aria-hidden="true"/></Link>
            <Card.Header>
                {r.name}
            </Card.Header>
            <Card.Description>
                {r.relation}
            </Card.Description>
        </Card.Content>
    </Card>


MemberCard.propTypes = {
    r: PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string
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
    return (
        <MemberCardGrid mems={data.allMembers}/>
    )
}

const DataMemberGrid =  graphql(getAllMembersQuery)(MemberCardGridWithData)


export {MemberCard, MemberCardGrid, MemberPage, DataMemberGrid}