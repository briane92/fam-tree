/**
 * Created by beggl on 10/21/2017.
 */
import React, { Component } from 'react'
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



class RelationshipForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: "Enter Name",
            relation: "self"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleRelation = this.handleRelation.bind(this)
    }


    handleSubmit(event){
        this.props.closeModal()
        event.preventDefault()
        this.props.addRelation({
            name: this.state.name,
            relation: this.state.relation
        })
    }

    handleName(event){
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    handleRelation(event){
        console.log(event.target.value)
        this.setState({relation:event.target.value})
    }


    render() {
        const showForm = this.props.showForm
        const closeModal = this.props.closeModal

        if (showForm) {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <span className="close" onClick={closeModal}>&times;</span>
                            <label>Name</label> <input type="text" onChange={this.handleName}/> <br/>
                            <label>Relationship</label><RelationshipSelector onChange={this.handleRelation}/><br/>
                            <button type="submit" value="submit" >Add</button>
                        </form>
                    </div>
                </div>)
        } else {
            return null;
        }
    }
}

export default RelationshipForm