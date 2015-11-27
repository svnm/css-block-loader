import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader/Loader';

function App(props) {
    return (
        <main>
            <Loader />
        </main>        
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));
