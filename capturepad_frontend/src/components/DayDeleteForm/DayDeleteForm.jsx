import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const DayForm = ({formDay}) => {

    const [day, setDay] = useState(formDay ? formDay : [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('update sent')
        console.log(day)
        axios.delete('http://localhost:8000/api/day/' + day.id)
            .then(response => console.log)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Are you sure that you want to delete {day.date}?    
                </div>
                <button type="submit">{'delete'}</button>
            </form>
            
        </div>
    )
}

export default DayForm
