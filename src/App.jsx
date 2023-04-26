
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/randomcolor'
import StarRating from './components/starRating'

function App() {

  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
