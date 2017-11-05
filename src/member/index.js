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

const MemberGrid = ({data}) =>
    <Card.Group>
        {
            data.map(m => {
                    return (<Member r={m} />)

                }
            )}
    </Card.Group>

MemberGrid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string})).isRequired
}

MemberGrid.defaultProps = {
    data: [
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
            bio
        }
    }
`

const DataMemberGrid =  graphql(membersQuery)(MemberGrid)




export {Member, MemberGrid, MemberPage, DataMemberGrid}