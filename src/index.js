import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <>
                <Home />

            </>
        )
    }
}

// =========================================
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
