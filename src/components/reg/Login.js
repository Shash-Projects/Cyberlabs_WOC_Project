import React, { useState} from 'react';
import styles from './login.module.css';
import InputControl from './InputControl';


import {Link, useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';


export default function Login() {
   
  const navigate = useNavigate();

  const [values, setValues]= useState({
    
    email:"",
    pswd: "",
  })

  const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);

  const handleSubmission =()=>{
    if(!values.email || !values.pswd){
      seterrorMsg('Fill all fields')
      return;
    }
    seterrorMsg(''); 
    console.log(values);
    
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pswd).then(async(res)=>{
      const user = res.user;
     
      
      console.log(user);

      setSubmitButtonDisabled(false);
      setSuccessMsg(`Hii${values.name} !!, Welcome to the Family!!`)
      navigate("/");
    })
    .catch((err)=> 
   seterrorMsg(err.message),
    setSubmitButtonDisabled(false),
    );

  };

  const [errorMsg, seterrorMsg]= useState(' ');
  const [successMsg, setSuccessMsg] =useState(' ');


  // mndsfdhfjd
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="Email" placeholder="Enter your Email" onChange={(event)=> setValues((prev)=>({...prev, email:event.target.value})) }/>
        <InputControl label="Password" placeholder="Enter your Password" onChange={(event)=> setValues((prev)=>({...prev, pswd:event.target.value}))}/>
        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b> 
        <b className={styles.success}>{successMsg}</b>
           <button className={styles.btnSubmit} onClick={handleSubmission} disabled={submitButtonDisabled} >Login</button>
           <p>
            Create a new account ? {""}
            <span>
              <Link to ="/signup"> Sign Up</Link>
            </span>
           </p>
        </div>
      </div>
    </div>
  )
}
