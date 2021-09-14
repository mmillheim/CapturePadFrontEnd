import React from 'react';
import { useState, useEffect } from "react";

const Notebooks = ({ notebooks }) => {
    console.log(notebooks)
    return (
        <div>
            <h1>Notebooks</h1>
            <div>
                {notebooks ? notebooks.map(notebook => {
                    return (
                            <div key={notebook.id} className="Notebook">
                                <h2>{notebook.title}</h2>
                            </div>
                        )
                }
                ) : null}
            </div>
            <p>hello world</p>
        </div>
    )
}

export default Notebooks
