/**
 * Created by beggl on 10/20/2017.
 */
import React from 'react'
import PropTypes, {arrayOf, shape, string} from 'prop-types'

const Member = ({r}) =>
    <div>
        <h1> {r.name} </h1>
        <h2> {r.relation} </h2>
    </div>


Member.propTypes = {
    r: PropTypes.shape({
        name: PropTypes.string,
        relation: PropTypes.string
    }).isRequired
}

const MemberGrid = ({mems}) =>
    <div>
        {
            mems.map(m => {
                    return (
                        <div key={m.name}>
                            <Member r={m} />
                            <br/>
                        </div>)

                }
            )}
    </div>

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