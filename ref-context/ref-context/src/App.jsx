import { createContext, useState } from 'react'
import './App.css'
import DivChange from './pages/divchange/DivChange'
import ComponentA from './pages/components/ComponentA'
import ComponentB from './pages/components/ComponentB'

export const DataContext = createContext();

function App() {

  let [username, setUsername] = useState("abc");

  return (
    <div className='container'>
      <DataContext.Provider value={username}>
        <ComponentA />
        <ComponentB />
        {/* <DivChange/> */}
      </DataContext.Provider>
    </div>
  )
}

export default App
