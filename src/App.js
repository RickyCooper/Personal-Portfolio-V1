import React, { useEffect } from 'react';

// import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import Navigation from './components/UI/Navigation/Navigation';
import styles from './app.module.scss';

function App() {
    useEffect(() => {
        const cursor = document.getElementById(`cursor`);
        document.addEventListener(`mousemove`, (e) => {
            cursor.setAttribute(
                `style`,
                `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`,
            );
        });
    }, []);

    return (
        <div className="App">
            <div className={styles.cursor} id="cursor"></div>
            <Navigation />
            <Landing />
            <Contact />
        </div>
    );
}

export default App;
