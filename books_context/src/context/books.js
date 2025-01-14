import { createContext, useState } from 'react';

//Create context:
const BooksContext = createContext();

//define the component Provider:
function Provider({ children }) {  //Custom Provider
    const [count, setCount] = useState(0);

    const valueToShare = {  //Object we want to share with all our components
        count: count, 
        incrementCount: () => {
            setCount(count + 1);
        }
    };

    return (                            //Object we want to share with all our components
        <BooksContext.Provider value={ valueToShare }>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

// Razon detras de export { Provider }

/* Modularidad: Exportar Provider de manera nombrada facilita la modularidad del código. 
Permite importar solo el Provider donde sea necesario 
sin importar automáticamente el contexto BooksContext. */
//ejemplo:
//import { Provider } from './BooksContextFile';

/* Reusabilidad: Otros componentes pueden necesitar utilizar el contexto 
sin utilizar directamente el Provider. Por lo tanto, 
exportar BooksContext por defecto permite que otros componentes consuman el contexto 
sin tener que envolverlos en el Provider. */
//ejemplo:
//import BooksContext from './BooksContextFile';
