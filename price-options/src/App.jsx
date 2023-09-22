
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-6xl bg-sky-600 m-4 p-8'>price-options</h1>
      <PriceOptions></PriceOptions>

    </>
  )
}

export default App
