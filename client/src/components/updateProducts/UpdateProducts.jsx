import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProducts = () => {
    const { id } = useParams('')
    console.log(id)
    const navigate = useNavigate()
    const [file, setFile] = useState("")
    const [iamgePreview, setImagePreview] = useState(null)
    const [data, setData] = useState({
        name: "",
        category: "",
        price: "",
        quantity: "",
        desc: ""
    })

    const FileSubmitHandeler = (e) => {
        setFile(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const onChnageHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const dataConfirmHandeler = () => {
        axios.put(`http://localhost:8989/admin/update/${id}`, data).then((response) => {
            setData(response.data)
            navigate('/admin')
        }).catch((err) => {
            console.log(err)
        })

    }

    const oldDataHandeler = () => {
        axios.get(`http://localhost:8989/admin/view/${id}`).then((response) => {
            setData(response.data)
            console.log(response.data)
            // setFile(e.target.files[0])
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        oldDataHandeler()
    }, [DataTransferItemList])

    return (
        <>
            <h1 style={{ marginTop: "1%", color: 'orange' }}><i>Add your new product</i></h1>
            <TextField label="Name of product" variant="outlined" onChange={onChnageHandler} value={data.name} name="name" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField label="Description of product" variant="outlined" onChange={onChnageHandler} value={data.desc} name="desc" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField type='number' label="Quantity of products" variant="outlined" onChange={onChnageHandler} value={data.quantity} name="quantity" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField type='number' label="Price in $" variant="outlined" onChange={onChnageHandler} value={data.price}
                name="price" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField label="Category of product" variant="outlined" onChange={onChnageHandler} value={data.category} name="category" style={{ width: "80%", marginTop: "3%" }} /><br />

            <div className='signup-profile-pic_container' style={{ width: 100, height: 80, marginTop: '3%' }}>
                <label htmlFor="image-upload" className='image-upload-label'>
                    <img src={iamgePreview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXwQvoIAFB4vAjEEqtGJXGMHga5Ax7AbpfA&usqp=CAU"} className="signup-profile-pic" />
                    Choose your product image
                </label>
                <input type="file" id='image-upload' name='file' hidden onChange={FileSubmitHandeler} accept='image/jpeg, image/png' />
            </div><br />

            <Button variant='contained' style={{ backgroundColor: "orangered", color: 'white' }}
                onClick={dataConfirmHandeler}>
                Submit
            </Button>
        </>
    )
}

export default UpdateProducts
