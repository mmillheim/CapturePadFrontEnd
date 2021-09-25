import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Day = ({dayUrl, notebookId}) => {

    const [dayData, setDayData ] = useState([])

    useEffect(() => {
        console.log('day useEffect called')
        console.log(dayUrl)
        fetch(dayUrl)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setDayData(response)
            })
        // console.log(selectedNotebook)
    }, []);


    return (
        <div className="day-line">
            <Link to={'/day/' + dayData.id}>
                {dayData.date}
            </Link>
        </div>
    )
}

export default Day
