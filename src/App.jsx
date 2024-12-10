import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage.jsx';
import MathPage from './routes/MathPage.jsx';
import DatePage from './routes/DatePage.jsx';
import ObjectPage from './routes/ObjectPage.jsx';
import ArrayPage from './routes/ArrayPage.jsx';
import LocalStoragePage from './routes/LocalStoragePage.jsx';
import APIFetchPage from './routes/APIFetchPage.jsx';
import Header from './components/header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/date" element={<DatePage />} />
          <Route path="/object" element={<ObjectPage />} />
          <Route path="/array" element={<ArrayPage />} />
          <Route path="/localstorage" element={<LocalStoragePage />} />
          <Route path="/api-fetch" element={<APIFetchPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

