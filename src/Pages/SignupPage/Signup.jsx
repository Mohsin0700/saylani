import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { authe } from '../../Config/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const signUpUser = () => {
      // console.log(email);
      createUserWithEmailAndPassword(authe, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert('Signup Successfully');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Error')
          // ..
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
            <TextField id="standard-basic" label="Full Name" variant="standard" onChange={(e) => setFullName(e.target.value)} />
            <br />
            <TextField id="standard-basic" label="Contact" variant="standard" onChange={(e) => setContact(e.target.value)} />
            <br />
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
            <br />  
            <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
          </Box>
        </div>
        <button className='btn btn-success btn-lg fw-bold my-5' onClick={signUpUser}>SignUp</button>
        <Link to='/login'><p className='text-primary fw-bold'>Already have an account ? Login</p></Link>
      </div>
    </div>
  )
}

export default SignUp

