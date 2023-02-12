import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authe } from '../../Config/FirebaseConfig';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    signInWithEmailAndPassword(authe, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert('Logged IN');
        navigate('/home');
      })
      .catch((error) => {
        alert('Incorrect Email or Password')
      });
  }
  return (
    <div className='main' style={{ overflow: 'hidden' }}>
      <div>
        <h1 className='saylani display-6 fw-bold'>SAYLANI WELFARE</h1>
        <h6 className='text-primary mb-5'>ONLINE DISCOUNT STORE</h6>
        <div className='mt-5'>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} value={password} />
          </Box>
        </div>
        <button className='btn btn-success btn-lg fw-bold my-5' onClick={loginUser}>SignIn</button>
        <Link to='/signup'><p className='text-primary fw-bold'>Don't have an account? Register</p></Link>
      </div>
    </div>
  )
}

export default SignIn
