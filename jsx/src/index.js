// 1) import the ract and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the dic with id root
const el = document.getElementById('root');

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a component (a function that returns some JSX)
function App(){
/*     <h4>this is an element</h4> //this isn't shows up in the browser (return is missing)
    let message = 'Bye there!'
    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }
    //return <h1>Hi there!</h1>
    return <h1>{message}</h1>; */

    //obtener el tiempo
    //modo 1:
/*     const date = new Date();
    const time = date.toLocaleTimeString();

    //modo2
    return <h1>{new Date().toLocaleTimeString()}</h1> */
    //Returning my name Excercise:
    const name = 'Raudo Moquete Sánchez'
    return (
        <div>
            My name is:
            <hi>{name}</hi>
        </div>
    );
}

// 5) Show the component on the screen
root.render(<App />);