import React from 'react'
import NvbUseState from './components/NvbUseState'
import NvbUsesEffect from './components/NvbUsesEffect'
import NvbUseContext from './components/NvbUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Nông Văn Bách - Hook</h1>
      <hr/>
      <NvbUseState />
      <hr/>
      <NvbUsesEffect />
      <hr/>
      <NvbUseContext />
    </div>
  )
}
