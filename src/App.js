import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tony from './Tony'

function App() {
    var [ bar , setBar ] = useState( 0 )
    return (
        <div className="App">
            <header className="App-header">
                <Tony setBar={ setBar } />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <img height={ bar + 'px' } src={logo} className="App-logo" alt="logo" /> */}
            </header>
        </div>
    );
}

export default App;
