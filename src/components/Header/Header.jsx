import React from "react";
import './header.css'

export default function Header({ onChange, episode }) {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <div className='logo'>
          <p>РИК И МОРТИ</p>
          <p>База данных героев</p>
        </div>
        <input
          onChange={onChange}
          value={episode}
          type='number'
          placeholder='Введите номер серии'
        />
      </div>
    </header>
  );
}
