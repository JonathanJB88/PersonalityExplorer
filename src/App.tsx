import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Test, Hero, Content, Layout } from './components';

import './index.css';

export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<Navigate to='/' />} />
        <Route path='/test' element={<Test />} />
        <Route path='/contact' element={<Navigate to='/' />} />
        <Route path='/content' element={<Content />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  </Router>
);
