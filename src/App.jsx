import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { useSelector } from 'react-redux';

function App() {
  const { mode } = useSelector((state) => state.mode);

  return (
    <div className={mode === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
