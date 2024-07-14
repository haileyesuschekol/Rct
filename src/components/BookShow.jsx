import BookEdit from "./BookEdit"
import { useContext, useState } from "react"
import "./BookShow.css"
import BookContext from "../context/book"
const BookShow = ({ book }) => {
  const { handleDelete } = useContext(BookContext)
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
        // handleEdit={handleEdit}
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
