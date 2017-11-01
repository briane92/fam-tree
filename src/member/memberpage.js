/**
 * Created by beggl on 10/31/2017.
 */
import React, { Component } from 'react'
import withModal from '../modal'
import RelationshipForm from '../relationship'
import {EventForm} from '../event'
import {MemberGrid} from '../member'
import {Button} from 'semantic-ui-react'


class MemberPage extends Component {
    constructor () {
        super()
        this.state = {
            AddRelationship: false,
            AddEvent:false,
        }
        this.closeModal = this.closeModal.bind(this);
        this.addRelation = this.addRelation.bind(this);
    }

    closeModal = () => this.setState({AddRelationship:false})
    addRelation = (relation)  => {
        const updatedrelations = [...this.state.relationships, relation]
        this.setState({
            relationships: updatedrelations
        })
    }

    render(
    ) {
        const RelationFormWithModal = withModal(RelationshipForm)
        const relationshipButton = <Button color='black'>Add Relationship</Button>
        const EventFormWithModal = withModal(EventForm)

        return (
            <div className="App">
                <h1 id="heading"> Family Members </h1>
                <MemberGrid mems={this.state.relationships}/> <br/>
                <RelationFormWithModal showContent = {this.state.AddRelationship} button = {relationshipButton} />
                <EventFormWithModal showContent = {this.state.AddEvent} />
            </div>
        );
    }

}

export default MemberPage