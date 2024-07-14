import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "./context/book"

// get a reference to the div with id root

const element = document.getElementById("root")

//tell react to take control of that element
const root = ReactDOM.createRoot(element)

//create a component

//shoe the component of the screen
root.render(
  <Provider>
    <App />
  </Provider>
)
