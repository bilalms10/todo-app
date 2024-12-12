import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './todo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo  />}  />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
