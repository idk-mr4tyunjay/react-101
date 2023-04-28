
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/imageSlider'
import RandomColor from './components/randomcolor'
import StarRating from './components/starRating'

function App() {

  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  )
}

export default App
