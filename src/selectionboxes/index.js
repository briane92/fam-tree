/**
 * Created by beggl on 10/15/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const RelationshipSelector = ({relationships, onChange}) =>
    <select onChange={onChange}>
        { relationships.map( (r) =>
            <option key={r} value ={r}> {r} </option>
        )}
    </select>

RelationshipSelector.propTypes = {
    relationships: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired

}

RelationshipSelector.defaultProps = {
    relationships: ["Mother", "Father", "Sister", "Brother", "Self", "Uncle", "Aunt", "Cousin"]
}

export default RelationshipSelector