import React, { useState, useEffect } from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Dinisuru Motors!');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [greeting,setGreeting] = useState('');

  useEffect(() => {
    document.title = 'Home - Dinisuru Motors';

    const getGreeting =() =>{
      const hours = new Date().getHours();
      if (hours <12){
        return 'Good Morning';
      }else if(hours < 19){
        return 'Good Afternoon';
      }else{
        return 'Good Evening';
      }
    };

    setGreeting(getGreeting());

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className="hero">
        <h2>{greeting}</h2>
        <h1 className="h1">{welcomeMessage}</h1>
        <p>{time}</p>
        <button onClick={() => setWelcomeMessage('Thanks for visiting!')}>
          View More <ArrowForwardRoundedIcon/>
        </button>
      </div>
    </div>
  );
};

export default Home;
