import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';


const AddProducts = () => {
    const [file, setFile] = useState("")
    const [iamgePreview, setImagePreview] = useState(null)
    const [data, setData] = useState({
        name: "",
        category: "",
        price: "",
        quantity: "",
        desc: "",
        leftQuantity:""
    })
    const FileSubmitHandeler = (e) => {
        setFile(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
    const onChnageHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const dataConfirmHandeler = () => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('desc', data.desc)
        formData.append('price', data.price)
        formData.append('quantity', data.quantity)
        formData.append('leftQuantity', data.leftQuantity)
        formData.append('category', data.category)
        formData.append('file', file)
        const configAxios = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://localhost:8989/product/post', formData, configAxios).then((response) => {
            console.log(response)
            setData({
                name: "",
                category: "",
                price: "",
                quantity: "",
                desc: ""
            })
            setFile('')
            setImagePreview('')
        }).catch((err) => {
            console.log(err)
        })

        console.log(formData)
        console.log(data, file,"55")
    }


    return (
        <>
            <h1 style={{ marginTop: "1%", color: 'orange' }}><i>Add your new product</i></h1>
            <TextField label="Name of product" variant="outlined" onChange={onChnageHandler} value={data.name} name="name" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField label="Description of product" variant="outlined" onChange={onChnageHandler} value={data.desc} name="desc" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField type='number' label="Quantity of products" variant="outlined" onChange={onChnageHandler} value={data.quantity} name="quantity" style={{ width: "80%", marginTop: "3%" }} /><br />
            <TextField type='number' disabled={true} label="Quantity of products Left" variant="outlined" onChange={onChnageHandler} value={data.leftQuantity} name="leftQuantity" style={{ width: "80%", marginTop: "3%" }} /><br />

            <TextField type='number' label="Price in $" variant="outlined" onChange={onChnageHandler} value={data.price}
                name="price" style={{ width: "80%", marginTop: "3%" }} /><br />


            <select onChange={onChnageHandler} value={data.category} name="category" style={{ width: "80%", height: "9%", marginTop: "3%" }} >
                <option>Select your product category</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Watches</option>
                <option>Cloths</option>
                <option>Toys</option>
                <option>Earphone</option>
            </select>

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

export default AddProducts
