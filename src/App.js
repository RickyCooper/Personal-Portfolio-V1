import React, { Suspense, useEffect } from 'react';

import About from './components/About/About';
import { Route } from 'react-router';
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
    const About = React.lazy(() => import(`./components/About/About`));
    const Contact = React.lazy(() => import(`./components/Contact/Contact`));
    const Portfolio = React.lazy(() =>
        import(`./components/Portfolio/Portfolio`),
    );

    return (
        <div className={styles.App}>
            <div className={styles.cursor} id="cursor"></div>
            <Route
                path="/"
                render={() => (
                    <Suspense fallback={<div>loading</div>}>
                        <Navigation />
                        <Landing />
                        <Portfolio />
                        <About />
                        <Contact />
                    </Suspense>
                )}
            />
        </div>
    );
}

export default App;
