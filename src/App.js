import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './client/Form';
import Form2 from './client/Form2';
import Submission from './client/SubmissionConfirm';
import Submitted from './client/Submitted';
import Dashboard from './client/Dashboard';
import SignIn from './client/SignIn';
import ProtectedRoute from './client/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/form1' element={<Form />} />
          <Route path='/form2' element={<Form2 />} />
          <Route path='/submission' element={<Submission />} />
          <Route path='/submitted' element={<Submitted />} />
          <Route 
            path='/dashboard' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> 
            } 
          />
          <Route index path="/" element={<Dashboard />} />  
          </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
