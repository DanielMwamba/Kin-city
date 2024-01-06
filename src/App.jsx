import Banner from "./components/banner";
import Sidebar from "./components/header";


function App() {
 

  return (

    <>
    <div className="flex ...">
      <div className="flex-none w-25 h-auto ...">
      <Sidebar/>
      </div>

      <div className="flex-none"></div>
       <Banner/>
    </div>
     
    
    </>
  )
}

export default App
