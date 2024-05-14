import { Form } from './components/form/core'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DataList } from './components/data-list/core';

import './App.css'

function App() {
  return (
    <Router>
      <div className='container-principal-app'>
        <Routes>
          <Route path='/8682AD4A-109E-4195-9039-BF86A7AD752F/form-core' element={<Form />} />
          <Route path='/6152173f7d6b18c7d839f544813d20a09a85c6e1807585cb2f518bb3c47edeaa/data-list-core' element={<DataList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App