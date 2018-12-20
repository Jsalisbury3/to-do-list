import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import List from './list';


const App = () => (
    <div className = "container">
        <h1 className="center">The to do list</h1>
       <List/>
    </div>
);

export default App;
