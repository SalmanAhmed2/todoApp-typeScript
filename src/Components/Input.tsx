import { TextField } from "@material-ui/core"
import React from "react"

type inputValues = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}
const Input: React.FC<inputValues> = ({ value, handleChange, placeholder }) => {
    return (
        <TextField value={value} onChange={handleChange} id="outlined-basic" label={placeholder} variant="outlined" />
    )
}
export default Input