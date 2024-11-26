import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

console.log(getRandomAnimal());

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
        //eso se pudo hacer de esta manera:
        //animals.push(getRandomAnimal())
        //PERO ESO MODIFICA UNA PIEZA DE ESTADO DIRECTAMENTE, Y ESO NO ES DEBIDO
    };

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />

        //en este casi map fuera algo como esto:
   /*      <AnimalShow type={animals[0]} />
        <AnimalShow type={animals[1]} /> */
    });

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderAnimals}</div>
        </div>
    );
}

export default App;