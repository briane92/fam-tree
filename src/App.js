import React, { Component } from 'react'
import './App.css'
import {MemberGrid} from './member'
import RelationshipForm from './relationship'
import {EventForm} from './event'
import withModal from './modal'
import {Button, Menu} from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'

const Header = () =>
    <Menu inverted>
        <Menu.Item>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/members">Members</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/timeline">Timeline</Link>
        </Menu.Item>
    </Menu>

const Main2 = () =>
    <main>
        <Switch>
            <Route exact path= '/' component={Home}/>
            <Route path='/members' component={Main} />
            <Route path='/timeline' component={Timeline}/>
        </Switch>
    </main>


class Main extends Component {
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

const Home = () =>
    <div>
        <h1> Welcome to Memories</h1>
        <p> Memories allows you to document your family history. Get started below by adding family members or create a timeline. </p>
    </div>

const Timeline = () =>
    <div>
        <h1>Not implemented !</h1>
    </div>


const App = () =>
    <div>
        <Header/>
        <Main2/>
    </div>


export default App;
