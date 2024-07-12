import BookShow from "./BookShow"

const BookList = ({ book, handleEdit, handleDelete }) => {
  const renderBook = book.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    )
  })

  return <div>{renderBook}</div>
}

export default BookList
