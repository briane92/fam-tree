import React, { Component } from 'react'
import './App.css'
import {MemberGrid, MemberPage} from './member'
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

const Main = () =>
    <main>
        <Switch>
            <Route exact path= '/' component={Home}/>
            <Route path='/members' component={MemberPage} />
            <Route path='/timeline' component={Timeline}/>
        </Switch>
    </main>


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
        <Main/>
    </div>


export default App;
