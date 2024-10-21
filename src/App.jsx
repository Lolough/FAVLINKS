
// form, table, some js to push data from form to table

import './App.css'

import Table from './components/Table'

import Form from './components/Form'

import {useState} from 'react'

// create an app component to render as our main component

function App(){

  const [favLinks, setFavLinks] = useState([])

  let handleNewSubmission = (data) => {

    setFavLinks([...favLinks, data])

  }

  return(
    <div>

      <h1>Gimme Yo Links!!</h1>

      <Form onNewSubmit={handleNewSubmission}/>

      <Table links={favLinks} />

      
    </div>
  )

}

export default App