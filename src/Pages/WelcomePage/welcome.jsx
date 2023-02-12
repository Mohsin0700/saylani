import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/Welcome.png'
import './welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className='main'>
            <div>
                <img src={img} alt="Saylani Discount Store" />
                <h1 className='saylani display-1 fw-bold'>SAYLANI WELFARE</h1>
                <h3 className='mb-5 text-primary'>ONLINE DISCOUNT STORE</h3>
                <button className='btn btn-success btn-lg fw-bold my-5' onClick={()=> {
                    navigate('/login')
                }}>GET STARTED</button>
            </div>
        </div>
    )
}

export default Welcome
