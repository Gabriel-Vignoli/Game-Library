import PropTypes from "prop-types"

TextInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  textLabel: PropTypes.string
}

export default function TextInput({value, setValue, textLabel}) {
    return (
        <div>
        <label htmlFor={textLabel}>{textLabel}</label>
        <input 
        type="text" 
        name={textLabel}
        id={textLabel} 
        value={value}
        onChange={(ev) => setValue(ev.target.value)} />
      </div>
    )
}