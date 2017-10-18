/**
 * Created by beggl on 10/15/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const RelationshipSelector = ({relationships}) =>
    <select>
        { relationships.map( (r) =>
            <option key={r} value ={r}> {r} </option>
        )}
    </select>

RelationshipSelector.propTypes = {
    relationships: PropTypes.arrayOf(PropTypes.string)

}

RelationshipSelector.defaultProps = {
    relationships: ["Mother", "Father", "Sister", "Brother"]
}

export default RelationshipSelector