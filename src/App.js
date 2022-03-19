import React, { useState } from 'react';
import './App.css';
import { HomePage } from './HomePage';
import { Footer } from './Footer';
import { Discover } from './Discover';

function App() {

    const [pageSelected, setPageSelected] = useState('Home');


    return (


        <div className="App">
            {pageSelected === 'Home' &&
                <HomePage />
            }
            {pageSelected === 'Discover' &&
                <Discover />
            }
            <Footer pageSelected={pageSelected} setPageSelected={setPageSelected}/>
        </div>
    );
}

export default App;
