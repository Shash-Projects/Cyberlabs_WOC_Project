import React, { useEffect, useState, } from 'react';
import { database, ref, set, fStore, setDoc, addDoc, updateDoc, doc, getDoc, collection } from '../Firebase';
import { getDocs, onSnapshot } from 'firebase/firestore';



var upCount1, upCount2;

export default function Page({ page }) {

    var vote1, vote2;
    // const [countCand1, setCountCand1] = useState(0);
    // const [countCand2, setCountCand2] = useState(0);
    const [dis, setDis] = useState(false);
    var [vote1, setVote1] = useState(upCount1);
    var [vote2, setVote2] = useState(upCount2);




    // const voteCand1 =async (curElem) => {

    //     let temp = countCand1 +1;
    //     setCountCand1(temp);
    //     setDis(true);
    //     let result;

    //     setTimeout(async ()=>{

    //         const counterRef = ref(database, 'Votes/' + curElem);
    //         console.log(curElem)
    //         // const childRef = push(counterRef);
    //         // const childRef = (counterRef, curElem.id)
    //          result=  await set(counterRef, {
    //             cand1: temp,
    //             say: "hello",
    //            })
    //            console.log(result);
    //     },2000)

    // }
    // console.log(option);

    // let currentCount=0;
    // const rRef = ref(database, "Votes/" + option)
    // set( rRef, currentCount + 1);










    // const rootRef = ref(database, "Topics" | data.heading )
    // set(rootRef, {

    // })

    // set(ref(database, 'Random/'+ data.cand1 ), {
    //    cand1: countCand1+1
    //   });




    // const voteCand1 = async (event) => {
    //     setCountCand1(countCand1 + 1);


    //     setDis(true);

    // const res = await fetch("https://shashwoc-default-rtdb.firebaseio.com/Topics.json",
    //     {
    //         method: "POST",
    //         Headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({         // whaterver data is passed to server must be a string file
    //             countCand1

    //         })

    // });
    //     if (res) {
    //         console.log("voted")
    //         console.log(countCand1)
    //     } else {
    //         console.log("Not voted")
    //     }

    // 
    // const topicRef = doc(fStore, "Voting-Topics", curElem.heading);
    // const docSnap =  getDoc(topicRef);
    // const count1 = docSnap.data().cand1;
    // const count = docSnap.data().cand2;









    return (
        <>
            {
                page.map((curElem) => {
                    {
                         
                        // const topicRef = doc(fStore, "Voting-Topics", curElem.heading);

                        // const docSnap =  getDoc(topicRef);
                        // if (docSnap.exists()) {
                        //     var vote1 = docSnap.data().cand1;
                        //     var vote2 = docSnap.data().cand2;}

                        // setTimeout(async () => {
                        //     const topicRef = doc(fStore, "Voting-Topics", curElem.heading);
                        //     const docSnap = await getDoc(topicRef);
                        //     if (docSnap.exists) {
                        //         // Access 'cand1' property here
                        //     } else {
                        //         console.error("Object or 'cand1' property is undefined.");
                        //     }
                        //     vote1 = docSnap.data().cand1;
                        //     vote2 = docSnap.data().cand2;
                        //     console.log("hello")
                        // }, 2000)
    



                    }
                    return (
                        <>
                            <section className="text-gray-600 body-font" key={curElem.id}>
                                <div className="container mx-auto flex px-5 pb-8 pt-24 md:flex-row flex-col items-center">
                                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                        <img className="object-cover object-center rounded" alt="hero" src={curElem.img} />
                                    </div>
                                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{curElem.heading}
                                            <br className="hidden lg:inline-block" />
                                        </h1>
                                        <p className="mb-8 leading-relaxed">{curElem.desc}</p>
                                        <div className="flex justify-center">
                                            <button disabled={dis} className=" disabled:bg-indigo-300 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                                onClick={
                                                    async () => {
                                                        if (!dis) {
                                                            console.log(curElem.heading)
                                                            setDis(true);
                                                            const topicRef = doc(fStore, "Voting-Topics", curElem.heading);

                                                            const docSnap = await getDoc(topicRef);
                                                            if (docSnap.exists()) {
                                                                const count = docSnap.data().cand1;
                                                                upCount1 = count + 1;
                                                                upCount2 = count + 0;
                                                               setVote1(upCount1);
                                                               setVote2(upCount2)
                                                                console.log(upCount1)
                                                                alert(`You have voted successfully for  ${curElem.cand1}`);
                                                               



                                                                updateDoc(topicRef, { cand1: upCount1 });
                                                                console.log("updated sucessfully")
                                                                console.log(dis)
                                                            } else {
                                                                console.error("Document not found");
                                                            }


                                                            //  })


                                                        }
                                                    }
                                                }
                                            > {curElem.cand1} </button>
                                            {/* <h1>{upCount1}</h1> */}
                                            <button disabled={dis} className="disabled:bg-indigo-300 ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                                onClick={
                                                    async () => {
                                                        if (!dis) {
                                                            console.log(curElem.heading)
                                                            setDis(true);
                                                            const topicRef = doc(fStore, "Voting-Topics", curElem.heading);

                                                            const docSnap = await getDoc(topicRef);
                                                            if (docSnap.exists()) {
                                                                const count = docSnap.data().cand2;
                                                                upCount2 = count + 1;
                                                                upCount1 = count + 0;
                                                                console.log(upCount2);
                                                                setVote2(upCount2)
                                                                setVote1(upCount1);
                                                                alert(`You have voted successfully for , ${curElem.cand2}`)



                                                                updateDoc(topicRef, { cand2: upCount2 });
                                                                console.log("updated sucessfully")
                                                                console.log(dis)
                                                            } else {
                                                                console.error("Document not found");
                                                            }


                                                            // })


                                                        }
                                                    }

                                                } > {curElem.cand2} </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section key='second' className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4 text-center">
                                        <div className="p-4 sm:w-1/4 w-1/2">
                                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vote1}</h2>
                                            <p className="leading-relaxed">Candidate 1</p>
                                        </div>
                                        <div className="p-4 sm:w-1/4 w-1/2">
                                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vote2}</h2>
                                            <p className="leading-relaxed">Candidate 2</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                })
            }
        </>
    )

}


