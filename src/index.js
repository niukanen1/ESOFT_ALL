import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { 
    ApolloClient, 
    InMemoryCache,
    ApolloProvider
} from '@apollo/client'


const client = new ApolloClient({
    uri: process.env.REACT_APP_APOLLO_ENDPOINT, 
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>, 
    document.getElementById('root')
)