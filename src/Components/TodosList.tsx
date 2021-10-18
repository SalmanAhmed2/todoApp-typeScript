import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Input } from "@mui/material";

type listDataProps = {
    todosList: {
        key: string,
        value: string
    }[],
    handleDelete: (id: string) => void,
    editTodo: (item: {
        key: string,
        value: string
    }) => void,
    updateTodo: (item: { key: string, value: string }) => void,
    isEdit: boolean
}
const TodosList: React.FC<listDataProps> = ({ todosList, handleDelete, editTodo, isEdit,
    updateTodo
}) => {
    const [state, setstate] = useState<{ key: string, value: string }>()
      return (
        <ul>
            {todosList.map((item, key) => {
                return (
                    <div style={{ display: "flex" }} key={key}>
                        <li style={{ listStyle: "none" }} key={key}>
                            {isEdit && item?.key == state?.key ?
                                <Input value={state?.value} onChange={(e) => setstate({ key: item.key, value: e.target.value })} />
                                : item?.value}
                        </li>
                        <li style={{ listStyle: "none", margin: "0 5px" }}><CancelIcon
                            onClick={() => handleDelete(item?.key)}
                        /></li>
                        <li style={{ listStyle: "none" }}>{isEdit && item?.key == state?.key ?
                            <SystemUpdateAltIcon
                                onClick={() => updateTodo({ key: state?.key!, value: state?.value! })
                                }
                            /> :
                            <BorderColorIcon onClick={() => {
                                editTodo({ key: item.key, value: item.value })
                                setstate(item)
                            }
                            } />}</li>
                    </div>)
            })}
        </ul>
    )
}

export default TodosList;