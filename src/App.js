import React, { Component } from 'react'
import './App.css'
import {MemberGrid} from './member'
import RelationshipForm from './relationship'
import {EventForm} from './event'
import withModal from './modal'
import {Button} from 'semantic-ui-react'

class App extends Component {
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
        const EventFormWithModal = withModal(EventForm)

    return (
      <div className="App">
          <h1 id="heading"> Family Graph </h1>
          <MemberGrid mems={this.state.relationships}/>
          <button type="button" onClick={()=> this.setState({AddRelationship:true})}>Add Relationship</button> <button type="button" onClick={()=> this.setState({AddEvent:true})}>Add Event</button>
          <Button onClick={()=> this.setState({AddRelationship:true})} color='black'> Add Relationship </Button>
          <RelationFormWithModal showContent = {this.state.AddRelationship} />
          <EventFormWithModal showContent = {this.state.AddEvent} />
      </div>
    );
  }
}





export default App;
