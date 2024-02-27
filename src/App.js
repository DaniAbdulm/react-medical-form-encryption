import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './client/Form';
import Form2 from './client/Form2';
import Submission from './client/SubmissionConfirm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Form />} />
          <Route path='/form2' element={<Form2 />} />
          <Route path='/submission' element={<Submission />} />
        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
