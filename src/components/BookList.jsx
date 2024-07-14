import BookShow from "./BookShow"
import BookContext from "../context/book"
import { useContext } from "react"
const BookList = () => {
  const { book } = useContext(BookContext)
  const renderBook = book.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
      />
    )
  })

  return <div>{renderBook}</div>
}

export default BookList
