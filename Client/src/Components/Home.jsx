import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home =({setRole})=>{   

    axios.defaults.withCredentials = true;
    useEffect(() =>{
        axios.get('http://localhost:9090/auth/verify')
        .then(res => {
            if(res.data.login){
                setRole(res.data.role)
            }else{
                setRole('')
            }
        }).catch(err => console.log(err))
    }, [])
    return (
        <>
        <div className='home'>
            <div className="home-content">
                <h1>Book shop</h1>
                <p className='home-description'>
                    Browse the collection of our best top interestiiing Books.
                    You will definitely find what you are looking for.
                </p>
            </div>
            <div className="home-image">

            </div>
        </div> 

        </>
    )
}

export default Home
