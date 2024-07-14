import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import Demo from "./components/Demo"

const App = () => {
  const [book, setBook] = useState([])

  const handleCreate = (newTitle) => {
    const updatedBook = [
      ...book,
      {
        id: Math.floor(Math.random() * 1000),
        title: newTitle,
      },
    ]
    setBook(updatedBook)
  }

  const handleEdit = (edit, id) => {
    const updated = book.map((book) => {
      if (book.id === id) {
        return { ...book, title: edit }
      }
      return book
    })

    setBook(updated)
  }

  const handleDelete = (deletedItem) => {
    const updated = book.filter((book) => {
      return deletedItem !== book.id
    })

    setBook(updated)
  }

  return (
    <div>
      <Demo />
      <BookCreate handleCreate={handleCreate} />
      <BookList
        book={book}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
