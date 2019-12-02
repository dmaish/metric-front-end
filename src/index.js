import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import{ ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './graphql';

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'));
serviceWorker.unregister();
