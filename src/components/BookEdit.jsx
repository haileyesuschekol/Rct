import { useState } from "react"

const BookEdit = ({ handleEdit, book, handleVisible, handleToggle }) => {
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
