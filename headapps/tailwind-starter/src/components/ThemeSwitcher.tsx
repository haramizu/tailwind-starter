import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'next-themes';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const styles = `${props.params.GridParameters ?? ''} ${props.params.Styles ?? ''}`.trimEnd();

  const { theme, setTheme } = useTheme();

  return (
    <div className={`component theme-switcher ${styles}`}>
      <div className="component-content">
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
    </div>
  );
};
