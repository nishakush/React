import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards.jsx';
import "./index.css";


ReactDOM.render(
  <>
    
      <Card
        user_img="https://i.pinimg.com/564x/bf/55/56/bf5556f2a8278d67832d41e2c1922bc3.jpg"
        title="Kaliya's profile"
        link="https://www.instagram.com/ssneha_tiwari/"
        details="Instagram profile of Kaliya"
        
      />
      <Card
        user_img="https://i.pinimg.com/736x/66/b0/87/66b087ba8371bdf427e6a8bcbef1ee1c.jpg"
        title="Nattu's profile"
        link="https://www.instagram.com/_nish_kush/"
        details="Instagram profile of Nattu"
      />
      <Card
        user_img="https://i.pinimg.com/564x/90/b4/88/90b488d2610af8580bb1345d4adb75c9.jpg"
        title="Nikku's profile"
        link="https://www.instagram.com/tomar_nikita21/"
        details="Instagram profile of Nikku"
      />
      <Card
        user_img="https://i.pinimg.com/736x/25/f7/68/25f768d68aa8f22d0d14b4d4d138e091.jpg"
        title="dumbo's profile"
        link="https://www.instagram.com/anshita.gupta12/"
        details="Instagram profile of Dumbo"
      />
      
  </>,
  document.getElementById("root")
);