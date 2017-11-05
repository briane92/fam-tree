/**
 * Created by beggl on 10/20/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Card } from 'semantic-ui-react'
import MemberPage from './memberpage'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const Member = ({r}) =>
    <Card>
        <Card.Content>
            <i className="fa fa-user fa-5x" aria-hidden="true"/>
            <Card.Header>
                {r.name}
            </Card.Header>
            <Card.Description>
                {r.relation}
            </Card.Description>
        </Card.Content>
    </Card>


Member.propTypes = {
    r: PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string
    }).isRequired
}

const MemberGrid = ({mems}) =>
    <Card.Group>
        {
            mems.map(m => {
                    return (<Member r={m} />)

                }
            )}
    </Card.Group>

const MemberGridWithData = ({data}) => {
    console.log(data)
        return (
        <MemberGrid mems={data.allMembers}/>
        )
}


MemberGrid.propTypes = {
    mems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string})).isRequired
}

MemberGrid.defaultProps = {
    mems: [
        {
            name: "Brian",
            relation: "Self"
        },
        {
            name: "Lashelle",
            relation: "Mother"
        },
        {
            name: "Brooke",
            relation: "Sister"
        }]
}

const membersQuery  = gql `
    query {
        allMembers {
            name
            relation
            bio
        }
    }
`

const DataMemberGrid =  graphql(membersQuery)(MemberGridWithData)




export {Member, MemberGrid, MemberPage, DataMemberGrid}