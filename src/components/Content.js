import React from 'react';
let titulo = 'Mi primer sitio con React JS';
let parrafo = require('../data/articulo.js').texto;
let image = 'https://placeimg.com/500/240/nature';

function Content() {
    return (
        <div>
            <div>
                <h1>{titulo} </h1>
            </div>
            <div>
                <p>
                    {parrafo}
                </p>
            </div>
            <div>
                <img src= {image} alt='paisaje'></img>
            </div>
        </div>
    )
}

export default Content;
