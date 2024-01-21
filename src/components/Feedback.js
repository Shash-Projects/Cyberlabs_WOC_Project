import React, { useState } from 'react';
import styles from './reg/login.module.css';

export default function Feedback() {

    const [errorMsg, setErrorMsg] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [feed, setFeed] = useState({
        name: "",
        email: "",
        phnNo: "",
        msg: ""
    })

    const sendSandesh = async (event) => {


        if (feed.name && feed.email && feed.msg && feed.phnNo) {
            event.preventDefault();                   //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
                                                      //since default action prevented, a manual request needs to be made

            const { name, email, phnNo, msg } = feed;   // destructurig the object
            setSubmitButtonDisabled(true);

            const res = await fetch('https://shashwoc-default-rtdb.firebaseio.com/Sandesh.json',
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({         // whaterver data is passed to server must be a string file
                        name,
                        email,
                        phnNo,
                        msg,

                    })
                }
            );
            if (res) {
                setFeed({
                    name: "",
                    email: "",
                    phnNo: "",
                    msg: "",
                })
                setSubmitButtonDisabled(false);
                alert("Data Stored")
            } else {
                setErrorMsg("Some error detected");

            };

        }
        else {
            event.preventDefault();
            setErrorMsg("*Please fill all fields");
        }
    }



    return (
        <>
            <div id='Contact Us' className="flex justify-center mb-12 ">
                <div className="w-4/5 my-5 mx-auto flex flex-col items-center md:flex-row ">
                    <div className="border w-[70%] h-full bg-yellow-800 text-white p-10 "> <span>
                        <h1 className="text-3xl font-semibold text-center mb-4 text-silver-300">Contact Us</h1>
                        <p className="text-xs font-normal mt-2 text-center">Contact us by filling this contact form. </p>
                    </span>
                        <form method='POST'>   {/* We use form method to send data to server */}
                            <div className="mt-6 leading-7 text-center">
                                                                                                                                  {/*Using spread op. i am able to specifically update that field of the form which has been targeted by the user */}           
                                <input type="text" name="name" placeholder="Full Name" id="" value={feed.name} onChange={(event) => { setFeed((prev) => ({ ...prev, name: event.target.value })) }}
                                    className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-yellow-800 focus:outline-none" />
                                <input type="email" name="email" placeholder="Email Address" id="" value={feed.email} onChange={(event) => { setFeed((prev) => ({ ...prev, email: event.target.value })) }}
                                    className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-yellow-800 focus:outline-none" />
                                <input type="tel" name="phnNo" placeholder="Phone Number" id="phone" value={feed.phnNo} onChange={(event) => { setFeed((prev) => ({ ...prev, phnNo: event.target.value })) }}
                                    className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-yellow-800 focus:outline-none" />
                                <textarea id="message" name="message" placeholder="Write us a message" onChange={(event) => { setFeed((prev) => ({ ...prev, msg: event.target.value })) }}
                                    className="w-[80%] bg-yellow-800 border-2 border-white h-44 text-sm outline-none placeholder:text-white placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea><br />
                                <b className={styles.error}>{errorMsg}</b>
                                <button disabled={submitButtonDisabled} onClick={sendSandesh}
                                    className="block m-auto w-[60%] md:w-[50%] text-center border bg-orange-400 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-orange-500">Send</button>
                            </div>
                        </form>
                    </div>
                    <div
                        className="border w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full ">
                        <img src="img/fist raised.jpg" alt="" className="" />
                        <p className="text-black">"Realise the power of our voting platform". <br /> Your voice, your choices - securely counted and authentically verified.
                            Embrace the evolution of voting - join the revolution today!"</p>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
        </>
    )
}
