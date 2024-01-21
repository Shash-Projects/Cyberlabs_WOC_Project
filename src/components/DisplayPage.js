import React, { useState, useEffect } from 'react';
import pageContent from '../components/PagesApi';
import Page from './Page';
import { useLocation } from "react-router-dom";  // useLocation is being used in compliment with useNavigate which is invoked in card component.



export default function DisplayPage() {

    const [page, setPage] = useState(pageContent);
    const location = useLocation();
    console.log(location);
    const uniqueId = location.state.key;   // through this the component is identifying the id of the specific topic which has been clicked.
    console.log(uniqueId);

    useEffect(() => {                     // It filters the object to dispplay only that component which has been clicked in the card section
                                          // otherwise the entire data about all topics will get displayed.

        const updateList = pageContent.filter((curElem) => {
            return curElem.id === uniqueId
        });
        setPage(updateList);
    }, [uniqueId]);



    return (
        <>
            <Page page={page} />    
        </>
    )




}
