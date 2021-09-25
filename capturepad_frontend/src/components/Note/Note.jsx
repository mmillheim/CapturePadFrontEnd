import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Note = ({noteUrl}) => {

    const [noteData, setNoteData ] = useState([])

    useEffect(() => {
        console.log('note useEffect called')
        console.log(noteUrl)
        fetch(noteUrl)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setNoteData(response)
            })
        // console.log(selectedNotebook)
    }, []);


    return (
        <div className="note-line">
            <Link to={'/note/' + noteData.id}>
                {noteData.textContent}
            </Link>
        </div>
    )
}

export default Note
