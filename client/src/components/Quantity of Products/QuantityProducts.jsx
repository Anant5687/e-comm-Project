import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const QuantityProducts = () => {
    const [searchedData, setSearchedData] = useState([])
    const [apiData, setApiData] = useState([])
    const onChnageHandeler = (e) => {
        setSearchedData(e.target.value)
    }

    const fetchData = () => {
        axios.get('http://localhost:8989/product/get').then((response) => {
            setApiData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [apiData])

    const onClickHandeler = () => {
        console.log(searchedData)
    }
    const handleDelete = (i) => {
        axios.delete(`http://localhost:8989/admin/delete/${i}`).then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <TextField label="Category" variant="outlined" style={{ width: '60%', marginTop: '5%' }}
                onChange={onChnageHandeler} value={searchedData} />
            <Button onClick={onClickHandeler} variant="contained" style={{ marginTop: '5%', height: "8vh", backgroundColor: 'orangered', color: 'white' }}>Search</Button>

            <>
                <table className="table" style={{ width: "90%", marginTop: '8%' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((ele, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.price}</td>
                                    
                                    <td className='d-felx justify-content-between'>
                                        <button className='btn btn-primary mx-4'><Link to={`/update/${ele._id}`} style={{ color: "white" }}><i className="fa-solid fa-pen"></i></Link></button>
                                    </td>

                                    <td className='d-felx justify-content-between'>
                                        <button className='btn btn-danger' onClick={() => handleDelete(ele._id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        </>
    )
}

export default QuantityProducts
