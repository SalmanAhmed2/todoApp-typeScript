import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
type listDataProps = {
    todosList: {
        key: string,
        value: string
    }[],
    handleDelete: (id: string) => void,
    // handleUpdate: (id: string) => void
}
const TodosList: React.FC<listDataProps> = ({ todosList, handleDelete,
    // handleUpdate 
}) => {
    return (
        <ul>
            {todosList.map((item, key) => {
                return (
                    <div style={{ display: "flex" }} key={key}>
                        <li style={{ listStyle: "none" }} key={key}>{item?.value}</li>
                        <li style={{ listStyle: "none", margin: "0 5px" }}><CancelIcon
                            onClick={() => handleDelete(item?.key)}
                        /></li>
                        {/* <li style={{ listStyle: "none" }}><BorderColorIcon onClick={() => handleUpdate(item?.key)} /></li> */}
                    </div>)
            })}
        </ul>
    )
}

export default TodosList;