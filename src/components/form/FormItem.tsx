import { ReactNode } from 'react';

import CSSClasses from './FormItem.module.scss';

export interface PropsModel {
  name?: string;
  children: ReactNode;
  errorMessage?: string | undefined;
}

function FormItem({ name, errorMessage, children }: PropsModel) {
  return (
    <div className={CSSClasses.wrapper}>
      {name && <div className={CSSClasses.name}>{name}</div>}
      <div>{children}</div>
      <div className={CSSClasses.error}>{errorMessage || ''}</div>
    </div>
  );
}

export default FormItem;
