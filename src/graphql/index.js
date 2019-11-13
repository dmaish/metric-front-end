import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
    uri: 'https://graphql',
});

export default apolloClient;