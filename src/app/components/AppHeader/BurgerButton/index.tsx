import clsx from 'clsx';
import React from 'react';
import './styles.scss';

export interface BurgerButtonProps {
  activeHeader: boolean;
  handleActiveHeader: () => void;
}

export function BurgerButton({
  activeHeader,
  handleActiveHeader,
}: BurgerButtonProps) {
  return (
    <button
      type="button"
      className={`BurgerButton ${clsx(activeHeader && 'active')}`}
      onClick={handleActiveHeader}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
