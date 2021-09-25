import React from 'react'
import { useState, useEffect } from 'react';

const NoteDetail = ({match}) => {
    const [noteData, setNoteData ] = useState([])

    const url = 'http://localhost:8000/api/note/' + match.params.id;

    useEffect(() => {
        console.log('note detail useEffect called')
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setNoteData(response)
            })
        // console.log(selectedNotebook)
    }, []);


    return (
        <div className='note-detail'>
            <h3>
                {noteData.textContent}
            </h3>
            <h4>due date: {noteData.dueDate}</h4>
            <h4>complete: {noteData.complete ? 'Yes' : 'No'}</h4>

            
        </div>
    )
}

export default NoteDetail
