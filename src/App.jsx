import { Navbar } from "./components/Navbar"
import { Sectio } from "./components/Sectio"

function App() {

  return (
    <div className=" h-full w-full flex flex-col min-h-screen">
      <Navbar className="flex-grow" />
      <Sectio />

    </div>
    
  )
}

export default App
