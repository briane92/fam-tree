import React from 'react'
import './App.css'
import {MemberPage} from './member'
import {ProfileDisplay} from './member/profile'
import {Menu, Message, Icon, Button} from 'semantic-ui-react'
import {Link, Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {SigninWithDataWithRouter as Signin} from './login'


const Home = () =>
    <div className="App">
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


const logout = ({client, history}) => {
    localStorage.clear()
    client.resetStore()
    history.push("/")
}

const LogOutButton = (props) => {
    return ( <Button onClick={()=> logout(props)}> Sign Out</Button> )
}

const LogOutButtonWithRouther = withRouter(LogOutButton)


const Header = (props) =>
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
            <Menu.Item>
                <Link to="/signin">Signin</Link>
            </Menu.Item>
            <Menu.Item>
              <LogOutButtonWithRouther client={props.client}/>
            </Menu.Item>
        </Menu>

const Main = () =>
    <main>
        <Switch>
            <Route exact path= '/' component={Home}/>
            <Route path='/members/:id' component={ProfileDisplay}/>
            <Route path='/members' component={MemberPage} />
            <Route path='/timeline' component={Timeline}/>
            <Route path='/signin' component={Signin} />
        </Switch>
    </main>

const App = (props) =>
    <div>
        <Header client={props.client}/>
        <Main className="App"/>
    </div>


export default App;
