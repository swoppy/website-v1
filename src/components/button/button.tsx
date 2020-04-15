import React from 'react';
import styles from './button.module.css';
import { UnreachableError } from '../../types/base/error';

export enum Roles {
  CLOSE,
  MAXIMIZE,
  MINIMIZE,
}

type ButtonProps = {
  role: Roles;
  onClick: () => void;
};

const getButtonStyles = (role: Roles) => {
  switch(role) {
    case Roles.CLOSE:
      return styles.closedButton;
    case Roles.MAXIMIZE:
      return styles.maximizeButton;
    case Roles.MINIMIZE:
      return styles.minimizeButton;
    default:
      throw new UnreachableError(role);
  }
};

export const Button = ({ role, onClick }: ButtonProps) => {
  return (
    <div className={getButtonStyles(role)} onClick={onClick}/>
  );
};

// TODO: decide on when to apply hover, base vs import after