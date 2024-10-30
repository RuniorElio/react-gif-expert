import { useState } from 'react';
import { AddCategory,GifGrid } from './componets';


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([ "One Punch" ]);

  const onAddCategory = ( newCategory ) =>{

  if( categories.includes(newCategory) ) return;
    // console.log(newCategory);
    //categories.push('valorant') //no hacer esto, muta al hook mala practica en ract
    setCategories([ newCategory,...categories ]);
    //setCategories( cat => [ ...cat, 'valorant' ] );
  }
  
  return (
    <>
    {/* titulo de la aplicacion */}

    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    
      // setCategories={ setCategories }
      onNewCategory={ (event) => onAddCategory( event )}
    
    />


    {/* Listado de Gifs */}
    {/* <button onClick={ onAddCategory }>Agregar</button> */}
   
    { 
      categories.map( ( category ) => (
        <GifGrid 
          key={ category } 
          category={ category }/>
        )
      )

    }
      
    
      {/* Gif Item */}
    
    
    </>
  )
}
