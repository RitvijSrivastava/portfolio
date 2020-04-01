import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
    render() {
        return (
            <>
                <CustomNavbar />

            </>
        )
    }
}

// =========================================
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
