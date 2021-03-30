import './app.module.scss';

import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import Navigation from './components/UI/Navigation/Navigation';
import React from 'react';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Landing />
            <Contact />
        </div>
    );
}

export default App;
