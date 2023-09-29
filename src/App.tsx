import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Gallery'

function App() {

  return (
    <div style={{marginTop:'1rem'}}>
      <div className="image-container">
        <img
          src="https://gifdb.com/images/high/in-love-emoji-qdo8exddondr1qae.gif"
          alt="gif"
          width="10%"
        />
      </div>
      <div className="title">
        Happy Birthday to Love of my Life
        <i
          className="bi bi-arrow-through-heart-fill"
          style={{ color: "red", marginLeft: "0.5rem" }}
        ></i>
      </div>
      <Gallery />
    </div>
  )
}

export default App
