import React, { useContext } from 'react'
import { ThemeContex } from './NvbUseContext'

export default function NvbUseContex2() {
    const theme = useContext(ThemeContex);
  return (
    <div className={theme + 'm-3'} >
      <h2> NvbUseContex2</h2>
      <p>
        <b>2210900003</b>
        <b>Nông Văn Bách </b>
        <i>K22CNT2</i>
      </p>
    </div>
  )
}
