/**
 * Created by beggl on 10/20/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Card } from 'semantic-ui-react'

const Member = ({r}) =>
    <Card>
        <Card.Content>
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



export {Member, MemberGrid}