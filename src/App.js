import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './client/Form';
import Form2 from './client/Form2';
import Submission from './client/SubmissionConfirm';
import Submitted from './client/Submitted';
import Dashboard from './client/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Form />} />
          <Route path='/form2' element={<Form2 />} />
          <Route path='/submission' element={<Submission />} />
          <Route path='/submitted' element={<Submitted />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
