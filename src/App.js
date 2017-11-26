import React from 'react'
import './App.css'
import {MemberPage} from './member'
import {ProfileDisplay} from './member/profile'
import {Menu, Message, Icon, Image} from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'
import  background from './assets/images/home-page.jpeg'


const Home = () =>
    <div className="App">
        <h1> Welcome to Memories</h1>
        <p> Memories allows you to document your family history. Get started below by adding family members or create a timeline. </p>
        <Image src={background} fluid />
    </div>

const Timeline = () =>
    <div>
        <Message info>
        <Message.Header> This page has not be implemented yet ! </Message.Header>
        <Icon name='info'/>  Please check back soon
        </Message>
    </div>

const Header = () =>
        <Menu inverted fixed='top'>
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
            <Route path='/members/:id' component={ProfileDisplay}/>
            <Route path='/members' component={MemberPage} />
            <Route path='/timeline' component={Timeline}/>
        </Switch>
    </main>

const App = () =>
    <div>
        <Header/>
        <Main className="App"/>
    </div>


export default App;
