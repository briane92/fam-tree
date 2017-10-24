import React, { Component } from 'react'
import './App.css'
import {MemberGrid} from './member'
import RelationshipForm from './relationship'
import withModal from './modal'

class App extends Component {
    constructor () {
        super()
        this.state = {
            AddRelationship: false
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

    return (
      <div className="App">
          <h1 id="heading"> Family Graph </h1>
          <MemberGrid mems={this.state.relationships}/>
          <button type="button" onClick={()=> this.setState({AddRelationship:true})}>Add Relationship</button>
          <RelationFormWithModal showContent = {this.state.AddRelationship} />
      </div>
    );
  }
}





export default App;
