import ReactDOM from "react-dom"
import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"
import data from "./data"
import "./index.css"


const App = () => {
  return (
    <div>
      <div className="main">
        <Header />
        {data.map(eachCard => {
          return (
            <Card key={eachCard.id} {...eachCard} />       
          )
        })}  
      </div>
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App