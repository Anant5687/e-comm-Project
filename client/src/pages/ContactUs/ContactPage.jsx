import React, { useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
const ContactPage = () => {
    const [ques, setQues] = useState("")

    const changeHandeler = (e) => {
        setQues(e.target.value)
    }

    const handleClick = () => {
        if (ques.trim() === "") {
            alert("Please enter your query first")
        } else {
            axios.post("http://localhost:8989/contact/query", { ques: ques }).then((response) => {
                console.log(response.data)
                setQues('')
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    return (
        <>
            <textarea onChange={changeHandeler}
                value={ques}
                aria-label="empty textarea"
                placeholder="Enter your ques here...."
                style={{ marginTop: "5%", width: "60%", height: 400 }}
            ></textarea><br />
            <Button variant="contaied" onClick={handleClick}
                style={{ backgroundColor: 'orange', color: "white", width: "50%" }}>
                Send
            </Button>
        </>
    )
}

export default ContactPage
