import './myStyle.css';         // styling for my navbar and footer is present here
import './responsive.css';      // it makes my navbar and footer responsive as they are coded by me, other components such as topic cards are made using tailwind therfore they are responsive by default.
import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import DisplayTopics from './components/DisplayTopics';  // these are various components present in my home page
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
import Quote from './components/Quote';


function Home(props) {    
  return (
    <>
      <Navbar usname={props.name}/>     {/* this name prop will conatin the name of user once he has authenticated  */}
      <Intro usname={props.name} />
      <Quote />
      <DisplayTopics />
      <Feedback />
      <Footer />
      </>
     

  );
}

export default Home;
