import React, { useState } from 'react';
import styles from './login.module.css';
import InputControl from './InputControl';
import {Link, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase';

export default function Signup() {

  const navigate = useNavigate();           // works complimentary with useLocation hook to change the loacation.
  const guProvider= new GoogleAuthProvider();

  const [values, setValues]= useState({
    name:"",
    email:"",
    pswd: "",
  })

  const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);

  const handleSubmission =()=>{
    if(!values.name || !values.email || !values.pswd){
      seterrorMsg('Fill all fields')
      return;
    }
    seterrorMsg(''); 
    console.log(values);
    
    setSubmitButtonDisabled(true); // Next line is kind of a promise 
    createUserWithEmailAndPassword(auth, values.email, values.pswd).then(async(res)=>{
      const user = res.user;
      await updateProfile(user, {   // as long as the code does not fetch user object, this code won't run.
        displayName: values.name,   // updating the name of user in order to sshow it on my home page as a welcome message. 
      })
      console.log(user);

      setSubmitButtonDisabled(false);
      
      navigate("/");              // after sign up this automatically redirects the user to the home page.
      window.location.reload();   // since user is now signed in, i must reload in order to display its name on the intro section.
    })
    .catch((err)=> 
    seterrorMsg(err.message),
    setSubmitButtonDisabled(false),
    );
    

  };
  const googleSubmission =()=>{
    signInWithPopup(auth, guProvider)  
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
    navigate("/");
    window.location.reload();
    
  }).catch((error) => {
    
    
    seterrorMsg(error.message);
    
    const email = error.customData.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);
    
  });

  }

  const [errorMsg, seterrorMsg]= useState(' ');
  

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Sign Up!</h1>
        {/* inputControl provides input functionality   */}
        <InputControl label="Name" placeholder="Enter your Name" onChange={(event)=> setValues((prev)=>({...prev, name:event.target.value})) }/>
        <InputControl label="Email" placeholder="Enter your Email" onChange={(event) => setValues((prev)=>({...prev, email:event.target.value})) }/>
        <InputControl label="Password" placeholder="Enter your Password" onChange={(event) => setValues((prev)=>({...prev, pswd:event.target.value})) }/>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b> 
           <button className={styles.btnSubmit} onClick={handleSubmission} disabled={submitButtonDisabled} >SignUp</button>
           <p className='text-center'>OR, Sign up with -</p>
           <button className={styles.googlebtn} onClick={googleSubmission}>Google</button>
           <p>
           Already have an account ?{""}
            <span>
              <Link to ="/login"> LogIn </Link>
            </span>
           </p>
        </div>
      </div>
    </div>
  )
}
