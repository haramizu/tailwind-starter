import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

export const Default = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {}, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme ? (theme === 'light' ? 'Dark Mode' : 'Light Mode') : 'Loading...'}
      </button>
    </div>
  );
};
