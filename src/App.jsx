import { useContext } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
// import Demo from "./components/Demo"
import BookContext from "./context/book"
const App = () => {
  const { error } = useContext(BookContext)
  return (
    <div>
      {/* <Demo /> */}
      <BookCreate />
      {error}
      <BookList />
    </div>
  )
}

export default App
