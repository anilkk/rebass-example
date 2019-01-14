import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Box,
    Card,
    Image,
    Heading,
    Text
} from 'rebass';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Box width={256}>
                        <Card
                            p={1}
                            borderRadius={2}
                            boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
                            <Image src="https://via.placeholder.com/150"/>
                            <Box px={2}>
                                <Heading as='h3'>
                                    Card
                                </Heading>
                                <Text fontSize={0}>
                                    Small meta text
                                </Text>
                            </Box>
                        </Card>
                    </Box>
                </header>
            </div>
        );
    }
}

export default App;
