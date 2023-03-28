import React from 'react'
import { createRoot } from 'react-dom/client'
import { store, a } from '@hero/model'
import './index.css'

function App() {

  console.log(store, a)

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">Install & Setup Vite + React + Typescript + Tailwind CSS 3</h1>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
