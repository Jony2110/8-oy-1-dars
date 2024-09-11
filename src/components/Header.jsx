import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../redux/modeSlice';
import { setLanguage } from '../redux/languageSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const dispatchs = useDispatch();
  const { language } = useSelector((state) => state.language);

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'uz' : 'en';
    dispatchs(setLanguage(newLanguage));
  };

  const handleModeChange = () => {
    dispatch(toggleMode());
  };

  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <img src="../../public/Logo.svg" alt="" />
      <div className="flex gap-4">
      <button onClick={handleLanguageChange}>
          {language === 'en' ? 'Uzbek' : 'English'}
        </button>
        <button onClick={handleModeChange}>
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
