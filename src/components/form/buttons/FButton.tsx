import { HTMLAttributes, ReactNode, useMemo } from 'react';

import CSSClasses from './FButton.module.scss';

export enum FButtonTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  ERROR = 'error'
}
export enum FButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}
export interface PropsModel extends HTMLAttributes<HTMLElement> {
  onClick?: () => void;
  type?: FButtonTypes;
  size?: FButtonSizes;
  children?: ReactNode;
}

const typesClasses = { default: '', primary: CSSClasses.primary, error: CSSClasses.error };
const sizeClasses = { small: CSSClasses.small, medium: '', large: CSSClasses.large };

function FButton(props: PropsModel) {
  const {
    onClick,
    type = FButtonTypes.DEFAULT,
    children,
    size = FButtonSizes.MEDIUM,
    ...otherProps
  } = props;
  const classType = useMemo(() => typesClasses[type] ?? typesClasses.default, [type]);
  const classSize = useMemo(() => sizeClasses[size] ?? sizeClasses.medium, [size]);
  const className = [CSSClasses.aButton, classType, classSize].join(' ').trim();

  return (
    <div {...otherProps} className={className}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default FButton;
