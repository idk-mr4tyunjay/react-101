
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/loadMoreBtn'
import RandomColor from './components/randomcolor'
import StarRating from './components/starRating'
import TreeView from './components/treeView'

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
      <LoadMoreData/>
    </>
  )
}

export default App
