import './SearchBar.css';
/** The following steps are the way we Handling Text inputs in reactjs */
import { useState } from 'react'; // 1 - create a new piece of state

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState(''); // 1-

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('I need to tell the parent about some data');

        onSubmit(term);
    };

    const handleChange = (event /*3 - when the 'onChange' event fires, get the value from the input*/) => { // 2 - create and event handler to watch for the 'onChange' event
        // 4 - take that value from the input and use it to update your state.
        setTerm(event.target.value);
    };
   
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
             {/* 5- pass your state to the input as the value prop */}
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    ) 
}

export default SearchBar;