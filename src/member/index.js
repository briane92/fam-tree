/**
 * Created by beggl on 10/20/2017.
 */
import React from 'react'
import PropTypes, {arrayOf, shape, string} from 'prop-types'

const Member = ({r}) =>
    <div>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow( 5px 5px 5px black )'}}>
            <g >
                <circle cx="50%" cy="50%" r="50%" fill="#779ecb"  />
                <text x="50%" y="50%" text-anchor="middle" >{r.name} </text>
                <text x="50%" y="70%" text-anchor="middle" >{r.relation}</text>
            </g>
        </svg>
        {/* <label>Name:</label> <span> {r.name}</span> <br/>
         <label>Relation:</label> <span>{r.relation}</span> <br/>*/}
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