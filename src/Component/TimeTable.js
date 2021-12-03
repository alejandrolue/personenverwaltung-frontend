import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {FormControlLabel, IconButton, TextField} from '@material-ui/core'
import { blue } from "@material-ui/core/colors";
import {useEffect, useState} from 'react'
import axios from 'axios'
//onClick={() => setEdit(true)}
//onClick={handleDelete}

const EditIconButton = ({ props }) => {
    const [edit, setEdit] = useState(false)
    const handleEditClick = () => {
        setEdit(!edit)
        console.log("icon")
    };

    return (
        <FormControlLabel
            onSubmit={
            axios.delete('http://localhost:8080/user/' + id, {
        }).then((res) => {
            console.log(res)
        })}
            control={
                <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    onClick={handleEditClick}
                >
                    <EditIcon style={{ color: blue[500] }} />

                </IconButton>
            }
        />
    );
};

const EditDeleteButton = (props) => {
    const handleEditClick = () => {
    };
    return (
        <FormControlLabel
            onSubmit={
        axios.delete('http://localhost:8080/user/' + props.id, {
        }).then((res) => {
            console.log(res)
        })}
            control={
                <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    onClick={handleEditClick}
                    variant={'submit'}
                >
                    <DeleteIcon style={{ color: blue[500] }} />

                </IconButton>
            }
        />
    );
};

export default function TimeTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'vorname', headerName: 'Vorname', width: 200},
        { field: 'nachname', headerName: 'Nachname', width: 200},
        { field: 'email', headerName: 'E-mail', width: 200},
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            width: 140,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{cursor: "pointer"}}
                    >
                        <EditDeleteButton id={id} index={params.row.id}/>
                        <EditIconButton index={params.row.id}/>
                    </div>
                );
            }
        }
    ]
    const [user, setUser] = useState([])
    const [id, setID] = useState(null)

    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080/user');
            const postsData = await response.json()
            setUser(postsData)
        }
        fetchEntry();
    }, [])

    return (
        <div style={{ height: 400, width: '50%', marginLeft: '23%'}}>
            <DataGrid
                rows={user}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onRowClick={(e) =>
                     setID(e.id)}
            />
        </div>
    );
}