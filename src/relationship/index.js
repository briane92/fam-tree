/**
 * Created by beggl on 10/21/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, Form } from 'semantic-ui-react'

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


            return (
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Name</label>
                                <input type="text" placeholder='Name of Family Member' onChange={this.handleName}/> <br/>
                            </Form.Field>
                            <Form.Field>
                                <label>Relationship</label>
                                <RelationshipSelector onChange={this.handleRelation}/><br/>
                            </Form.Field>
                            <Button type='submit' color='black' >Add</Button>
                        </Form>
              )

    }
}

export default RelationshipForm