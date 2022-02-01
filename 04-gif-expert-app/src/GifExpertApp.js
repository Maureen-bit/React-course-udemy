import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.js";
import { GifGrid } from "./components/GifGrid.js";

const GifExpertApp = ({ defaultCategories = [] }) => {
    /* Enviamos como argumento una categoría por defecto para poder probar en el test ya que
    no hay manera de poner un state en las pruebas ya que cada estado no tiene un identificador*/
    const [categories, setCategories] = useState(defaultCategories);
    
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