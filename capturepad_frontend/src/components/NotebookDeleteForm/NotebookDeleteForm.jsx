import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const NotebookForm = ({formNotebook}) => {

    const [notebook, setNotebook] = useState(formNotebook ? formNotebook : [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('update sent')
        console.log(notebook)
        axios.delete('http://localhost:8000/api/notebook/' + notebook.id)
            .then(response => console.log)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Are you sure that you want to delete {notebook.title}?    
                </div>
                <button type="submit">{'delete'}</button>
            </form>
            
        </div>
    )
}

export default NotebookForm
