import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    //const categories = ['One Piece', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Piece']);
    
    // const handleAdd = ()=>{
    //     setCategories( (c) => [...c, 'Slum Dunk'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            
            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map( category =>{
                        //return <li key={category}>{category}</li>
                        return <GifGrid 
                            key={category}                            
                            category={category}
                        />
                    })
                }
            </ol>
            
        </>
    )
}