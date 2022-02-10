import React from 'react';
import { InputType } from '@/types';
import style from './CheckBox.module.scss';

interface CheckBoxProps {
  name: string,
  value: any,
  onClick(v: any): void,
  inputType: InputType
}

const CheckBox = ({
  name,
  value,
  onClick,
  inputType,
}: CheckBoxProps) => {
  return (
    <div className={style.wrapper}>
      <label
        onClick={() => onClick(value)}
      >
        <input
          type={inputType}
          name={name}
          value={value}
          className={style.selectInput}
        />
        <svg className={style.checkbox} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="21" height="21" stroke="black" strokeWidth="2" />
          <path d="M5 13.1L8.93023 17L18 8" stroke="black" strokeWidth="4" />
        </svg>
        {name || ''}
      </label>
    </div>
  );
};

export default CheckBox;