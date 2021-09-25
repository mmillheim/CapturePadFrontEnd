import React from 'react';
import { Link } from 'react-router-dom'

const Notebooks = ({ notebooks }) => {
    console.log(notebooks)
    return (
        <div>
            <h1>Notebooks:</h1>
            <div>
                {notebooks ? notebooks.map(notebook => {
                    return (
                            <div key={notebook.id} className="Notebook">
                                <Link to={'/notebook/' + notebook.id}>
                                    <h2>{notebook.title}</h2>
                                </Link>
                            </div>
                        )
                }
                ) : null}
            </div>
        </div>
    )
}

export default Notebooks
