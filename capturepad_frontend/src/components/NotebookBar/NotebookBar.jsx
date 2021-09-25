import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const NotebookBar = ({notebooks, selectedNotebook}) => {
    useEffect(() => {
        console.log('notebook bar useEffect called')
        // console.log(selectedNotebook)
    }, []);

    console.log(selectedNotebook)

    if (!selectedNotebook) {
        return (
            <div>
                <Link to='/notebooks'>Create a Notebook</Link>
            </div>
            )
    }
    return (
        <div className='notebook-bar'>
            <Link to='/notebooks'>◀</Link>
            <p>{selectedNotebook.title}</p>
            <Link to={'/notebook/' + selectedNotebook.id + '/edit'}>✏️</Link>
            <Link to='/notebooks/new'>➕</Link>
        </div>
    )
}

export default NotebookBar
