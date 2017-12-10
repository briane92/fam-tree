/**
 * Created by beggl on 10/21/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Form} from 'semantic-ui-react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


const RelationshipSelector = ({relationships, onChange, selected, value}) =>
    <select onChange={onChange} value={ `${value.charAt(0).toUpperCase()}${value.substring(1)}` }>
        {relationships.map((r) => {
                if (true) {
                    return <option key={r} value={r}> {r} </option>
                } else {
                    return <option key={r} value={r}> {r} </option>
                }
            }
        )}
    </select>

RelationshipSelector.propTypes = {
    relationships: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired

}

RelationshipSelector.defaultProps = {
    relationships: ["Mother", "Father", "Sister", "Brother", "Self", "Uncle", "Aunt", "Cousin"]
}

class CreateMemberForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Enter Name",
            relation: "self"
        }
        this.closeAction = props.closeAction
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleRelation = this.handleRelation.bind(this)
        this.createMember = this.createMember.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        if (this.closeAction) {
            this.closeAction()
        }
        console.log(this.state.name + this.state.relation)
        if (this.props.createMemberMutation) {
            this.createMember()
        }
    }

    handleName(event) {
        this.setState({name: event.target.value})
    }

    handleRelation(event) {
        this.setState({relation: event.target.value})
    }

    createMember = async() => {
        const {name, relation} = this.state
        await this.props.createMemberMutation({
            variables: {name, relation}
        })

    }

    render = () =>
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Name</label>
                <input type="text" placeholder='Name of Family Member' onChange={this.handleName}/> <br/>
            </Form.Field>
            <Form.Field>
                <label>Relationship</label>
                <RelationshipSelector onChange={this.handleRelation}/><br/>
            </Form.Field>
            <Button type='submit' color='black'>Add</Button>
        </Form>


}
const createMemberQuery = gql`
     mutation createMemberMutation($name: String!, $relation: String!){
        createMember (name: $name, relation: $relation, ){
            name
            relation
        } 
    }
`


const CreateMemberFormWithData = graphql(createMemberQuery, {name: 'createMemberMutation'})(CreateMemberForm)

export default CreateMemberFormWithData