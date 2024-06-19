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
          <Route path='/form1' element={<ProtectedRoute><Form /></ProtectedRoute>} />
          <Route path='/form2' element={<ProtectedRoute><Form2 /></ProtectedRoute>} />
          <Route path='/submission' element={<ProtectedRoute><Submission /></ProtectedRoute>} />
          <Route path='/submitted' element={<ProtectedRoute><Submitted /></ProtectedRoute>} />
          <Route 
            path='/dashboard' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> 
            } 
          />
          <Route index path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />  
          </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
