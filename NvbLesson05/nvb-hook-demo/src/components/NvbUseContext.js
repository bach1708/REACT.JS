import React, { createContext, useContext, useState } from 'react'
import NvbUseContex1 from './NvbUseContex1';
export const ThemeContex = createContext(); //tao ngu canh de chia se

export default function NvbUseContext() {
    // state
    const [theme, setTheme] = useState('red');

    // ham thay doi theme
    const nvbHandleChange = ()=>{
        setTheme(theme ==='red'?'blue':'red');
    }
  return (
    <ThemeContex.Provider value = {theme}>
    <div className='alert'>
      <h2>Demo UseContext</h2>
      <NvbUseContex1 />
      <button onClick ={nvbHandleChange}>Change bgcolor</button>
      </div>
    </ThemeContex.Provider>
  )
}
