import { useContext } from "react"
import BookContext from "../context/book"
const Demo = () => {
  const { count, incrementCount } = useContext(BookContext)
  return (
    <div>
      {count}
      <button onClick={incrementCount}>Add</button>
    </div>
  )
}

export default Demo
