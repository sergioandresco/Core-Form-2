import { Form } from './components/form/core'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataList } from './components/data-list/core';

import './App.css'

function App() {
  return (
    <Router>
      <div className='container-principal-app'>
        <Routes>
          <Route path='/8682AD4A-109E-4195-9039-BF86A7AD752F/form-core' element={<Form />} />
          <Route path='/8682AD4A-109E-4195-9039-BF86A7AD752F/data-list-core' element={<DataList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App