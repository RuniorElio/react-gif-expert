import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputvalue ] = useState('');

    const onInputChange = ({ target }) => {
        
        // console.log(target.value);
        setInputvalue (target.value);
    }

    const onSubmit = ( event ) => {

        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        // console.log(inputvalue);
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() )
        setInputvalue('');
    }
  
    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={  onInputChange } 
            />
        </form>
       

  )
}
