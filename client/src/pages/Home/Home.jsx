import React from 'react'
import CarouSel from '../../components/Carousels/Carousels'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Items/Products'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const userData = useSelector(state => state.userInfo.userInfo)
  console.log(userData)
  const [admin, setAdmin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (userData.isAdmin) {
      setAdmin(true)
    }
  }, [admin])
  return (
    <div>
      <Navbar />
      {admin &&
        <Button variant='contained' style={{ backgroundColor: 'orange', color: 'white', marginTop:"10px" }} onClick={() => navigate('/admin')}>
          Manage your inventory
        </Button>
      }
      <CarouSel />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
