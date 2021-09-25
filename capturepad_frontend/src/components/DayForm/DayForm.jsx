import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'

const DayForm = ({match}) => {

    const [day, setDay] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('update sent')
        console.log(day)
        if (match) {
            axios.put('http://localhost:8000/api/day/' + day.id, day)
                .then(response => console.log)
        } else {
            axios.post('http://localhost:8000/api/days', {
                "name": 1,
                "date": day.date
            })
                .then(response => console.log)
        }
    }

    const handleDateChange = (event) => {
        day.date=event.target.value
        setDay(day)
    }
    const url = 'http://localhost:8000/api/day/' + (match ? match.params.id : null);

    useEffect(() => {

        if(match){
            console.log('day useEffect called')
            console.log(url)
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setDay(response)
                })
        }
        // console.log(selectedNotebook)
    }, []);

    return (
        <div>
            <h2>
                {match ? 'edit ' + day.date : 'Create day'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="date">date: </label>
                    <input type="date" id="date" onChange={handleDateChange} defaultValue={day ? day.date : '' }/>
                </div>
                <button type="submit">{match ? 'update' : 'create'}</button>
            </form>
            
        </div>
    )
}

export default DayForm
