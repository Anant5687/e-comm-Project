import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useApiData from '../../../hooks/useApiData';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Earphones = () => {
  const selector = useSelector(state => state.userInfo.userInfo)
  const { error, loading, apidata } = useApiData("http://localhost:8989/product/filter/Earphone")

  const onClickHandeler = (i) => {
    console.log(i)
    axios.post(`http://localhost:8989/fetch/${selector._id}/${i}`).then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  
  return (
    <> <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(apidata).map((ele, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }} style={{ marginTop: "4%", marginLeft: "5%" }}>
              <CardMedia
                style={{ height: 250, width: 200, marginLeft: 100 }}
                component="img"
                image={ele.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Price: ${ele.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, aliquam.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => onClickHandeler(ele._id)}>Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default Earphones