import React, { Component } from 'react'
import './App.css'
import {MemberPage} from './member'
import {Button, Menu, Message, Icon} from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'


const Home = () =>
    <div>
        <h1> Welcome to Memories</h1>
        <p> Memories allows you to document your family history. Get started below by adding family members or create a timeline. </p>
    </div>

const Timeline = () =>
    <div>
        <Message info>
        <Message.Header> This page has not be implemented yet ! </Message.Header>
        <Icon name='info'/>  Please check back soon
        </Message>
    </div>

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

const App = () =>
    <div>
        <Header/>
        <Main/>
    </div>


export default App;
