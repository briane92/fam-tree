import React, { Component } from 'react';
import './App.css';
import RelationshipSelector from './selectionboxes';

class RelationshipForm extends React.Component {

    constructor(props){
        super(props)

    }

    render() {

        if (props.showForm) {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <form>
                        <span className="close" onClick={props.closeModal}>&times;</span>
                        <label>Name</label> <input type="text"/> <br/>
                        <label>Relationship</label><RelationshipSelector/><br/>
                        <button type="button" onClick={() => alert("clicked") }>Add</button>
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
                    <div>
                        <Member r={m} key = {m.name} />
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
    }

    closeModal=  () => this.setState({AddRelationship:false})


  render(
  ) {
    return (
      <div className="App">
          <h1 id="heading"> Family Tree </h1>
          <MemberGrid mems={this.state.relationships}/>
          <button type="button" onClick={()=> this.setState({AddRelationship:true})}>Add Relationship</button>
          <RelationshipForm showForm={this.state.AddRelationship} closeModal = {this.closeModal} />

      </div>
    );
  }
}





export default App;
