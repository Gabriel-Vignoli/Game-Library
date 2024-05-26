import { useState } from "react"
import PropTypes from "prop-types"
import Input from "./TextInput"

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
		<form onSubmit={handleSubmit}>
      <Input
      value={title}
      setValue={setTitle}
      textLabel="Titulo:"
      ></Input>
      <Input
      value={cover}
      setValue={setCover}
      textLabel="Capa:"
      ></Input>
      <button type="submit">Adicionar</button>
    </form>
  )
}