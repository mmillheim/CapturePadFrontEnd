import Day from '../Day/Day'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const NotebookDetail = ({match, selectedNotebook, setSelectedNotebook}) => {
    
    const [noteData, setNoteData] = useState([])
    
    function getNotebook(){
        console.log('getNotebook called')
        const url = 'http://localhost:8000/api/notebook/' + match.params.id;
  
        fetch(url)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setSelectedNotebook(response)
            })
            .catch(console.error)
    }
            
    useEffect(() => {
        setSelectedNotebook(selectedNotebook)
      console.log('useEffect called')
      getNotebook();
      // console.log(selectedNotebook)
    }, []);
  


    return (
        <div>
            <Link to={'/notebook/' + selectedNotebook.id + '/delete'}>Delete</Link>
            <h1>Days 
                <Link to='/days/new'>(+)</Link>
            </h1>
            <div className="day-list">
                {selectedNotebook.days ? selectedNotebook.days.map(dayUrl => {
                    return (
                            <div key={dayUrl} className="Notebook">
                                <Day dayUrl={dayUrl}/>
                            </div>
                        )
                }
                ) : (<p>no days found</p>)}
            </div>
        </div>
    )
}

export default NotebookDetail
