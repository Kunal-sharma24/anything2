import Catogeries from "./components/Catogeries"
import Crousel from "./components/Crousel"
import Extrasales from "./components/Extrasales"
import Featuredbrands from "./components/Featuredbrands"
import Icons from "./components/Icons"
import Megasales from "./components/Megasales"
import { Navbar } from "./components/Navbar"
import Newarrivals from "./components/Newarrivals"
import { Sectio } from "./components/Sectio"

function App() {

  return (
    <>
    <div className=" bg-[#F1F6F8] h-full w-full flex flex-col min-h-screen">
      <Navbar />
      <Crousel/>
      <Icons/>
      <Catogeries/>
      <Newarrivals/>
      <Megasales/>
      <Extrasales/>
      <Featuredbrands/>
      <Sectio/>
    </div>
    </>

    
  )
}

export default App
