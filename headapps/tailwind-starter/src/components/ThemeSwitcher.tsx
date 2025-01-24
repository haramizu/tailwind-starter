import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

export const Default = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {}, [theme]);

  return (
    <div>
      <button onClick={() => setTheme('light')} disabled={theme === 'light'}>
        Light
      </button>
      <span> - </span>
      <button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>
        Dark
      </button>
      <span> - </span>
      <button onClick={() => setTheme('system')} disabled={theme === 'system'}>
        System
      </button>
    </div>
  );
};
