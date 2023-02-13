import { ReactNode, useMemo } from 'react';

import CSSClasses from './DialogWrapper.module.scss';

export interface PropsModel {
  title: string;
  active: boolean;
  setActive?: (value: boolean) => void;
  children: ReactNode;
}

function DialogWrapper({ title, children, active = false, setActive }: PropsModel) {
  const dialogClass = useMemo(() => {
    const arr = [CSSClasses.dialog];
    if (active) {
      arr.push(CSSClasses.active);
    }
    return arr.join(' ');
  }, [active]);

  return active ? (
    <div className={dialogClass}>
      <div className={CSSClasses.wrapper}>
        <div className={CSSClasses.top}>
          <div className={CSSClasses.title}>{title}</div>
          <div className={CSSClasses.close} onClick={() => (setActive ? setActive(false) : null)}>
            x
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : (
    <div data-testid="close-dialog" />
  );
}

export default DialogWrapper;
