import './App.css'
import Gallery from './Gallery'
import gifi from './assets/onlinegift.gif'

function App() {

  return (
    <div className='app__wrapper'>
      <div className="image-container">
        <img
        className='gifi'
          src={gifi}
          alt="gif"
        
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
