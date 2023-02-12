import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dp from '../../Assets/dp.png'
import './Account.css'

const Account = () => {
    return (
        <div className='Account'>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><img className='' src={dp} alt="" width={100} style={{ borderRadius: '90px' }} /></div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Update Full Name" variant="standard" />
                </Box>
                <h1 className='text-primary'>Orders</h1>
                <p>Orders will be shown here</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button className='btn btn-success btn-lg'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Account
