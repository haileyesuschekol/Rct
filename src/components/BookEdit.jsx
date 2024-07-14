import { useContext, useState } from "react"
import BookContext from "../context/book"

const BookEdit = ({ book, handleVisible, handleToggle }) => {
  const { handleEdit } = useContext(BookContext)
  const [edit, setEdit] = useState("")

  const handleChange = (event) => {
    setEdit(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleEdit(edit, book.id)
    handleToggle()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default BookEdit
