import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Notebooks from './components/Notebooks/Notebooks'
import NotebookBar from './components/NotebookBar/NotebookBar';
import NotebookNavBar from './components/NotebookNavBar/NotebookNavBar';
import NotebookForm from './components/NotebookForm/NotebookForm';
import NotebookDeleteForm from './components/NotebookDeleteForm/NotebookDeleteForm';
import NotebookDetail from './components/NotebookDetail/NotebookDetail';
import DayDetail from './components/DayDetail/DayDetail';
import DayForm from './components/DayForm/DayForm';
import NoteDetail from './components/NoteDetail/NoteDetail';
import NoteForm from './components/NoteForm/NoteForm';
import Drawing from './components/Drawing/Drawing';


function App() {
  const [notebooks, setNotebooks] = useState([]);
  const [selectedNotebook, setSelectedNotebook] = useState([])

  function getNotebooks(){
      console.log('getNotebooks called')
      const url = 'http://localhost:8000/api/notebooks';

      fetch(url)
          .then(response => response.json())
          .then(response => {
              // console.log(response)
              setNotebooks(response)
              setSelectedNotebook(response[0])
              
              if (selectedNotebook === []) {
                setSelectedNotebook(response[0])
                console.log("notebook set")
                console.log(selectedNotebook)
              }
              
            })
          .catch(console.error)
            
  }
          
  useEffect(() => {
    console.log('useEffect called')
    getNotebooks();
    // console.log(selectedNotebook)
  }, []);

  return (
    <div className="App">
        <nav>
          <div id='nav-bar'>
            <ul>
              <li id='home-link'>
                <Link to='/'>CapturePad</Link>
              </li>
              <li>
                {/* <Link to='/notebooks'>Notebooks</Link> */}
                <NotebookBar notebooks={notebooks} selectedNotebook={selectedNotebook}/>
              </li>
              <li id='login-link'>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
          <NotebookNavBar/>
        </nav>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/notebooks/' render={() => <Notebooks notebooks={notebooks}/>} />
          <Route exact path='/notebooks/new' render={() => <NotebookForm/>} />
          <Route exact path='/notebook/:id/edit' render={() => <NotebookForm formNotebook={selectedNotebook}/>} />
          <Route exact path='/notebook/:id' render={routerProps => <NotebookDetail match={routerProps.match} selectedNotebook={selectedNotebook} setSelectedNotebook={setSelectedNotebook}/>} />
          <Route exact path='/notebook/:id/delete' render={() => <NotebookDeleteForm formNotebook={selectedNotebook}/>} />
          <Route exact path='/day/:id' render={routerProps => <DayDetail match={routerProps.match}/>} />
          <Route exact path='/days/new' render={() => <DayForm selectedNotebook={selectedNotebook}/>} />
          <Route exact path='/day/:id/edit' render={routerProps => <DayForm match={routerProps.match} selectedNotebook={selectedNotebook}/>} />
          <Route exact path='/note/:id/edit' render={routerProps => <NoteForm match={routerProps.match} selectedNotebook={selectedNotebook}/>} />
          <Route exact path='/note/:id' render={routerProps => <NoteDetail match={routerProps.match}/>} />
          <Route exact path='/drawing' component={Drawing} />
          {/* {selectedNotebook ? selectedNotebook.title : null} */}
        </main>
    </div>
  );
}

export default App;
