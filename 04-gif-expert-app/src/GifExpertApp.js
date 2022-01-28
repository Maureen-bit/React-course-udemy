import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.js";
import { GifGrid } from "./components/GifGrid.js";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Puch']);
    
    return(
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    /* No usar el indice como key para los elementos ya que es muy volátil y puede cambiar
                    en cualquier momento */
                    categories.map( category =>
                        (
                            <GifGrid 
                                category={category}
                                key={category}
                            />
                        )
                    )
                }
            </ol>
        </>
    )
};
 export default GifExpertApp;