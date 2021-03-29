import { useState } from 'react';
import './App.css';
import Tony from './Tony'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    var [ bar , setBar ] = useState( 0 )
    return (
        <div className="App">
                <Tony setBar={ setBar } />
                <br />
                <br />
                <br />
                <br />
        </div>
    );
}

export default App;
