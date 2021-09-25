import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const NotebookForm = ({formNotebook}) => {

    const [notebook, setNotebook] = useState(formNotebook ? formNotebook : [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('update sent')
        console.log(notebook)
        if (formNotebook) {
            axios.put('http://localhost:8000/api/notebook/' + notebook.id, notebook)
                .then(response => console.log)
        } else {
            axios.post('http://localhost:8000/api/notebooks', {
                "title": notebook.title
            })
                .then(response => console.log)
        }
    }

    const handleTitleChange = (event) => {
        notebook.title=event.target.value
        setNotebook(notebook)
    }
    
    const handleActiveChange = (event) => {
        console.log(event.target)
        notebook.active=event.target.value
        setNotebook(notebook)
    }

    return (
        <div>
            <h2>
                {formNotebook ? 'edit ' + notebook.title : 'Create notebook'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" onChange={handleTitleChange} defaultValue={notebook ? notebook.title : '' }/>
                </div>
                <div>
                    <label htmlFor="active">Active: </label>
                    <input type="checkbox" id="active" onChange={handleActiveChange} value={notebook ? notebook.active : true} defaultChecked={notebook ? notebook.active : true}/>
                </div>
                <button type="submit">{formNotebook ? 'update' : 'create'}</button>
            </form>
            
        </div>
    )
}

export default NotebookForm
