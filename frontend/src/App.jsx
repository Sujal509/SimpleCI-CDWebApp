import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ApiHandle from './components/ApiHandle'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Simple App with</h2>
      <h1>Vite & React</h1>
      <ApiHandle />
    </>
  )
}

export default App
