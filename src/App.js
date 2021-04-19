import React, { Suspense, useEffect } from 'react';
import { Route } from 'react-router';
// import About from './components/About/About';
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

    const Landing = React.lazy(() => import(`./components/Landing/Landing`));
    const Navigation = React.lazy(() =>
        import(`./components/UI/Navigation/Navigation`),
    );
    const Contact = React.lazy(() => import(`./components/Contact/Contact`));

    return (
        <div className="App">
            <div className={styles.cursor} id="cursor"></div>
            <Route
                path="/"
                render={() => (
                    <Suspense fallback={<div>loading</div>}>
                        <Navigation />
                        <Landing />
                        <Contact />
                    </Suspense>
                )}
            />
        </div>
    );
}

export default App;
