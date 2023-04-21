import './App.css'
import InputText from './components/InputText'
import OutputText from './components/OutputText'
import Navbar from './components/Navbar'

function App() {

  return (
    <div><Navbar />

      <div className="flex flex-col text-center transition-all">
        <InputText />
        <button className=' bg-cyan-300 p-5 w-1/4 m-auto rounded-md duration-300 hover:bg-cyan-400 hover:shadow-md hover:scale-105'>Get Summary</button>
        <OutputText />
      </div>

    </div>
  )
}

export default App
