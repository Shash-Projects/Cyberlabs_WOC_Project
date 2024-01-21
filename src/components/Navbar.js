import React from 'react';
import { auth, signOut } from '../Firebase';
import styles from '.././components/reg/Font.module.css';


export default function Navbar(props) {


  const bhaagJa = () => {

    signOut(auth).then(() => {
      console.log('sign out successful')           // Sign-out successful.
    }).catch((error) => {
      console.log('sign out unsuccessful')           // An error happened.
    });
  }

  const burgerEffect = () => {
    
    let navbar = document.querySelector('.navbar');
    let navlist = document.querySelector('.nav-list');
    let search = document.querySelector('.search-options');

    search.classList.toggle('vis-resp');
    navlist.classList.toggle('vis-resp');
    navbar.classList.toggle('nav-resp');
  }



  return (
    <>
      <nav className="navbar background font-serif nav-resp z-50">
        <div className="navContain">
          <ul className="nav-list vis-resp">
            <div className="logo">
              <img src="img/v2.jpg" alt="sorry" />
            </div>
            <li ><a className={styles.serif} href="#Home">Home</a></li>
            <li ><a href="#Hot Topics ">Hot Topics!</a></li>

            {/* <li><a href="/">Host election</a></li> */}

            <li><a href="#Contact Us">Contact Us</a></li>
            <li><a href="#Footer">About us</a></li>

            {/* By default sign out is not displayed. It will be displayed only when the user 
            has authenticated, which is why to verify tha the user has authenticatd
            I have sent username as a prop to NavBar component. */}

            {props.usname && <li onClick={bhaagJa}><a href='/'> Sign Out</a></li>} 



          </ul>
          <div className="search-options vis-resp">
            <input type="text" className="search-field" placeholder="Search" />
            <button className="btn-sm srch-btn">Search</button>
          </div>
          <div className="burger" onClick={burgerEffect}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </>
  )
}
