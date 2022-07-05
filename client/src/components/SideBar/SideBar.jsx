import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import AddProducts from '../AddProducts/AddProducts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import QuantityProducts from '../Quantity of Products/QuantityProducts';
import InventoryIcon from '@mui/icons-material/Inventory';


const SideBar = () => {
  const [productShow, setProductShow] = useState(false)
  const [quantityShow, setQuantityShow] = useState(false)
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              <ListItem onClick={() => {
                setProductShow(true);
                setQuantityShow(false)
              }}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Add Product" secondary={today} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem onClick={() => {
                setProductShow(false)
                setQuantityShow(true)
              }}>
                <ListItemAvatar>
                  <Avatar>
                    <ProductionQuantityLimitsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Products management" secondary={today} />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem onClick={() => {
                setProductShow(false)
                setQuantityShow(false)
              }}>
                <ListItemAvatar>
                  <Avatar>
                    <InventoryIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Stock" secondary={today} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>

          </Grid>
          {
            !productShow && !quantityShow && <div style={{ marginTop: '10%', marginLeft: "18%" }}>
              <img style={{ marginLeft: "30%", marginRight: "30%", marginTop: "7%", opacity: "0.8", background: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2QkfmGgYAB2BDwLq7GBlWBDwR9KvNO7lxQ&usqp=CAU" alt="img" />
              <br />
              <h1 style={{ color: 'orange' }} align='center'>Heyy Admin...</h1>
            </div>
          }
          {productShow && <Grid item xs={6} md={8}>
            <AddProducts />
          </Grid>}
          {quantityShow && <Grid item xs={6} md={8}>
            <QuantityProducts />
          </Grid>}
        </Grid>
      </Box>
    </>
  )
}

export default SideBar
