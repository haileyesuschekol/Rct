import React from "react"
import ReactDOM from "react-dom"

// get a reference to the div with id root

const element = document.getElementById("root")

//tell react to take control of that element
const root = ReactDOM.createRoot(element)

//create a component

function App() {
  return (
    <div>
      <h2>This is a component</h2>
    </div>
  )
}
//shoe the component of the screen
root.render(<App />)
