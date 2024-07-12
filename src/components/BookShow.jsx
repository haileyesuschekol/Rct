import BookEdit from "./BookEdit"
import { useState } from "react"
import "./BookShow.css"
const BookShow = ({ book, handleEdit, handleDelete }) => {
  const [visible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleToggle = () => {
    setVisible(false)
  }

  const handleDeleteBtn = () => {
    handleDelete(book.id)
  }
  let content = <h3>{book.title}</h3>
  if (visible) {
    content = (
      <BookEdit
        book={book}
        handleEdit={handleEdit}
        handleToggle={handleToggle}
      />
    )
  }

  return (
    <div className="showBooks">
      {content}
      <button onClick={handleVisible}>Edit</button>
      <button onClick={handleDeleteBtn}>Delete</button>
    </div>
  )
}

export default BookShow
