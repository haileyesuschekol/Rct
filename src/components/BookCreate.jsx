import "./BookCreate.css"
import { useState } from "react"

const BookCreate = ({ handleCreate }) => {
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
