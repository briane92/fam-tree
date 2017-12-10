import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import {ApolloProvider} from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'


let uri = ''
if(process.env.NODE_ENV === 'production'){
    uri = 'https://stark-chamber-38796.herokuapp.com/graphql'
}else
{
    uri='http://localhost:4000/graphql'
}

console.log(uri)

const httpLink = createHttpLink({
    uri:uri
})

const authLink = setContext((_, {headers})=>{

    const token = localStorage.getItem('jwt')
    console.log(token)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null
        }
    }

})



const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({dataIdFromObject: o => o.id})
});

const app =
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App client={client}/>
        </BrowserRouter>
    </ApolloProvider>

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
