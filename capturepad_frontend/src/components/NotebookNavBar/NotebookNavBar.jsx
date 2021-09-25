import React from 'react'

const NotebookNavBar = () => {
    console.log('notebook navbar')
    let currentDay = new Date().toLocaleDateString()
    return (
        <div id='notebook-navbar'>
            <div>{currentDay}</div>
            <div id='view-list'>
                <div id='dayview-btn'>Day</div>
                <div id='weekview-btn'>Week</div>
            </div>
        </div>
    )
}

export default NotebookNavBar
