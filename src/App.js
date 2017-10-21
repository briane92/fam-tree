import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './App.css'
import RelationshipSelector from './selectionboxes'


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

const Member = ({r}) =>
    <div>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow( 5px 5px 5px black )'}}>
            <g >
                <circle cx="50%" cy="50%" r="50%" fill="#779ecb"  />
                <text x="50%" y="50%" text-anchor="middle" >{r.name} </text>
                <text x="50%" y="70%" text-anchor="middle" >{r.relation}</text>
            </g>
        </svg>
       {/* <label>Name:</label> <span> {r.name}</span> <br/>
        <label>Relation:</label> <span>{r.relation}</span> <br/>*/}
    </div>


const MemberGrid = ({mems}) =>
    <div>
        {
            mems.map(m => {
                return (
                    <div key={m.name}>
                        <Member r={m} />
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
          <h1 id="heading"> Family Graph </h1>
          <MemberGrid mems={this.state.relationships}/>
          <button type="button" onClick={()=> this.setState({AddRelationship:true})}>Add Relationship</button>
          <RelationshipForm showForm={this.state.AddRelationship} closeModal = {this.closeModal} addRelation = {this.addRelation}/>

      </div>
    );
  }
}





export default App;
