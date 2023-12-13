import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
