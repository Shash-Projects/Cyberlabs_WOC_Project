import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro(props) {
  return (

    <section id='Home' className="text-gray-600 body-font">
      <div className="container mx-auto flex px-9 py-12 md:flex-row flex-col items-center">
        <div className="mx-20  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font leading-10 sm:text-5xl text-3xl mb-8 font-medium text-gray-900">Welcome to VoteForIt !
            <br className=" hidden lg:inline-block" />The time is yours...
          </h1>
          <p className="text-md mb-8 leading-relaxed"> "Step into the future with 'Vote for It' – where transparency meets authenticity in the world of web 3.0. Your votes, securely counted and authentically verified. Join us in shaping tomorrow's decisions with trust and transparency as our guiding stars!"
            <br /><br />Be the change you desire. Bring the change you desire,
            go Vote For It..
          </p>
          
    {/* Presence of usname proves that the user has authenticated,  no longer any need to display signin/ login. */}

           {!props.usname &&     
            <div>
              <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900"> Be a part of us!!</h2>
              <div className="flex justify-center">

        {/* this link tag is being used in compliment with the routes specified in the app component  */}

                <Link to="/login"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button></Link>
                <Link to="/signup"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">SignUp</button></Link>

              </div>
              </div> 
              
            }

            <b className=' pt-10 pl-10 bold text-2xl' >{props.usname ? `Welcome ${props.usname}...` : ""} </b>
        </div>

        {/* Right hand side Img */}

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt='hero' src='img/voting.jpg'></img>
        </div>
      </div>

    </section>
  )
}
