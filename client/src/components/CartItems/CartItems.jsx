import React, { useState } from 'react'
import SkeLEton from '../Skeleton/Skeleton'
import { Box, Grid, CardMedia, Card, Button, Typography, CardContent } from '@mui/material'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CartItems = () => {
    const [apidata, setApiData] = useState([])
    const selector = useSelector(state => state.userInfo.userInfo)

    useEffect(() => {
        axios.get(`http://localhost:8989/cart/allProducts/${selector._id}`).then((response) => {
            setApiData(response.data.items)
        }).catch((err) => {
            console.log(err)
        })
    }, [apidata])


    const productDeleteHandeler = (i) => {
        console.log(i)
        axios.delete(`http://localhost:8989/fetch/${selector._id}/${i}`).then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const allOrdered = () => {
        axios.delete(`http://localhost:8989/fetch/${selector._id}`).then((response) => {
            console.log(response.data)
            alert("Items ordered")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            {
                apidata.length < 1
                    ?
                    <SkeLEton />
                    :
                    <>
                        <Box sx={{ flexGrow: 1, width: "94%", marginLeft: "2%", marginTop: "2%" }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {Array.from(apidata).map((ele, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Card sx={{ display: 'flex', marginTop: "2%", flex: 1 }} style={{ height: '95%', width: '100%' }}>

                                            <CardMedia
                                                component="img"
                                                style={{ height: 200, width: 150, marginLeft: 40 }}
                                                image={ele.img[0]}
                                                alt="Live from space album cover"
                                            />
                                            <Box s
                                                x={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography component="div" variant="h5" style={{ marginTop: "1%" }}>
                                                        {ele.name}
                                                    </Typography>
                                                    <Typography component="div" variant="h5" style={{ marginTop: "3%" }}>
                                                        Price:${ele.price}
                                                    </Typography>
                                                    <Typography component="div" variant="h6" style={{ marginTop: "3%" }}>
                                                        Quantuity:{ele.quantity} Unit
                                                    </Typography>
                                                    <Button variant="contained" style={{ marginTop: "20%" }} size="small" color="error"
                                                        onClick={() => productDeleteHandeler(ele.id)}>
                                                        Remove item
                                                    </Button>
                                                </CardContent>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Button variant="contained"
                            style={{
                                backgroundColor: "orangered", color: 'white'
                                , marginTop: "10%", display: "flex", position: "flexEnd"
                                , marginLeft: "86%", marginBottom: "4%"
                           }} onClick={allOrdered} >
                            Place Your Order
                        </Button>
                    </>
            }
        </>
    )
}

export default CartItems
