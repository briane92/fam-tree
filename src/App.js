import React, { Component } from 'react';
import './App.css';
import RelationshipSelector from './selectionboxes';

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
        alert('submission occured')
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

const Member = ({r}) =>
    <div>
        <label>Name:</label> <span> {r.name}</span> <br/>
        <label>Relation:</label> <span>{r.relation}</span> <br/>
    </div>


const MemberGrid = ({mems}) =>
    <div>
        {
            mems.map(m => {
                return (
                    <div key={m.name}>
                        <Member r={m} />
                        <br/>
                        <br/>
                    </div>)

        }
            )}
    </div>


class App extends Component {
    constructor () {
        super()
        this.state = {
            relationships: [{
                name: "brian",
                relation: "self"
            },
                {
                name: "Lashelle",
                relation: "Mother"
            },
                {
                    name: "Brooke",
                    relation: "Sister"
                }],
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
    return (
      <div className="App">
          <h1 id="heading"> Family Tree </h1>
          <MemberGrid mems={this.state.relationships}/>
          <button type="button" onClick={()=> this.setState({AddRelationship:true})}>Add Relationship</button>
          <RelationshipForm showForm={this.state.AddRelationship} closeModal = {this.closeModal} addRelation = {this.addRelation}/>

      </div>
    );
  }
}





export default App;
