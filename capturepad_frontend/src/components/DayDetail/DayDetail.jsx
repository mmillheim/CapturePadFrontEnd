import React from 'react'
import { useState, useEffect } from 'react'
import Note from '../Note/Note';

const DayDetail = ({ match }) => {

    const [dayData, setDayData ] = useState([])

    const url = 'http://localhost:8000/api/day/' + match.params.id;

    useEffect(() => {
        console.log('day useEffect called')
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setDayData(response)
            })
        // console.log(selectedNotebook)
    }, []);


    return (
        <div className='day-detail'>
            <h2>{dayData.date}</h2>
            <div className="day-list">
                {dayData.notes ? dayData.notes.map(noteURL => {
                    console.log(noteURL)
                    return (
                            <div key={noteURL} className="note-line">
                                <Note noteUrl={noteURL}/>
                            </div>
                        )
                }
                ) : (<p>no notes found</p>)}
            </div>
        </div>
    )
}

export default DayDetail
