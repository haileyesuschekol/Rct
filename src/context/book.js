import { createContext, useState } from "react"

const BookContext = createContext()

const Provider = ({ children }) => {
  const [book, setBook] = useState([])
  const [error, setError] = useState("")
  const handleCreate = (newTitle) => {
    if (newTitle) {
      setError("")
      const updatedBook = [
        ...book,
        {
          id: Math.floor(Math.random() * 1000),
          title: newTitle,
        },
      ]
      setBook(updatedBook)
    } else {
      setError("Please Add Item")
    }
  }

  const handleEdit = (edit, id) => {
    setError("")
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

  const valueToShare = {
    handleDelete,
    handleCreate,
    handleEdit,
    book,
    error,
  }
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  )
}
export { Provider }
export default BookContext
