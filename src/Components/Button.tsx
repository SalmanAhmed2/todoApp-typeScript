import Button from '@mui/material/Button';
type buttonText = {
    text: string,
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Buttons: React.FC<buttonText> = ({ handleSubmit, text }) => {
    return (
        <Button style={{ margin: "0 5px" }} variant="contained" onClick={handleSubmit}>{text}</Button>
    )
}
export default Buttons