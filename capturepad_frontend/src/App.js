import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Notebooks from './components/Notebooks/Notebooks'


function App() {
  const [notebooks, setNotebooks] = useState([]);
  function getNotebooks(){
      console.log('getNotebooks called')
      const url = 'http://localhost:8000/api/notebooks';

      fetch(url)
          .then(response => response.json())
          .then(response => {
              // console.log(response)
              setNotebooks(response)
            })
          .catch(console.error)
            
  }
          
  useEffect(() => {
    console.log('useEffect called')
      getNotebooks();
    }, []);

  return (
    <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/notebooks'>Notebooks</Link>
        </nav>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/notebooks' render={() => <Notebooks notebooks={notebooks}/>} />
        </main>
    </div>
  );
}

export default App;
