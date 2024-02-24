import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './client/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
