import "./BookCreate.css"
import { useContext, useState } from "react"
import BookContext from "../context/book"

const BookCreate = () => {
  const { handleCreate } = useContext(BookContext)
  const [title, setTitle] = useState("")
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreate(title)
    setTitle("")
  }
  return (
    <div className="createBook">
      Type . . .
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} className="inputField" />
        <button className="btn">Create</button>
      </form>
    </div>
  )
}

export default BookCreate
