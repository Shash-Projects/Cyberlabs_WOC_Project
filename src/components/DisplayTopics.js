import React, { useState } from 'react';
import Card from './Card.js';
import topicContent from './TopicsApi.js';
import './cards.css';



function DisplayTopics() {
  const [topic, setTopic] = useState(topicContent);

  const filterTopics = (category) => {
    const updatedList = topicContent.filter((curElem) => {
      return curElem.category === category;
    })
    setTopic(updatedList);

  };

 

  return (
    <>
    <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="pl-20 pt-10 sm:w-2/6 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Why go and Vote For It :</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10  pt-4">Your vote isn't just a drop in the ocean; it's a ripple that shapes the tides of change. Be the DJ of democracy, spinning your tune in the ballot box, because silence speaks volumes, but your vote? That's a thunderous roar for the future you believe in.</p>
            </div>
          </div>


      <nav className='navBar text-center m-auto ml-10 ' id='Hot Topics'>
        <div className="btn-group text-center ">
          
          <button className='btn-group__item' onClick={() => { setTopic(topicContent) }}>All</button>
          <button className='btn-group__item' onClick={() => filterTopics('Anime')}>Anime</button>
          <button className='btn-group__item' onClick={() => filterTopics('Campus Affairs')}>Campus affairs</button>
          <button className='btn-group__item' onClick={() => filterTopics('Politics')}>Politics</button>
          <button className='btn-group__item' onClick={() => filterTopics('Food')}>Food</button>
          

        </div>

      </nav>
      

      <Card topic={topic} />
    </>
  )
}

export default DisplayTopics;