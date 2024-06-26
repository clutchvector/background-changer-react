import { useState } from 'react'
import Footer from './components/Footer';


function App() {
  const [color, setColor] = useState("white")
  const [textColor, setTextColor] = useState("");

  return (
    <>
      <div className=' w-full h-screen' style={{ backgroundColor: color }}>
        <h1 className='text-4xl text-slate-600 mb-2 text-center font-semibold' style={{ color: textColor }}>Background changer</h1>
        <div className='flex flex-wrap justify-evenly p-2 bg-slate-700 bottom-12'>

          <button className='flex justify-center px-3 p-1 text-white hover:bg-blue-800 bg-blue-500 rounded-xl mx-1' onClick={() => {
            setColor("#1E90FF")
            setTextColor("white")
          }}>Blue</button>

          <button className='flex justify-center px-3 p-1 text-white hover:bg-red-800 bg-red-500 rounded-xl mx-1' onClick={() => {
            setColor("#CD5C5C")
            setTextColor("white")
          }} >Red</button>

          <button className='flex justify-center px-3 p-1 text-white hover:bg-yellow-300 bg-yellow-500 rounded-xl mx-1' onClick={() => {
            setColor("#FFFF00")
            setTextColor("rgb(51,65,85)")
          }}>Yellow</button>

          <button className='flex justify-center px-3 p-1 text-white hover:bg-green-800 bg-green-500 rounded-xl mx-1' onClick={() => {
            setColor("#00FA9A")
            setTextColor("rgb(51,65,85)")
          }}>Green</button>

          <button className='flex justify-center px-3 p-1 text-white hover:bg-orange-600 bg-orange-500 rounded-xl mx-1' onClick={() => {
            setColor("#FFA500")
            setTextColor("white")
          }}>Orange</button>

          <button className='flex justify-center px-3 p-1 text-white hover:bg-pink-300 bg-pink-500 rounded-xl mx-1' onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default App
