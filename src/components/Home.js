import React from 'react';
import profileImage from '../profile.jpg'; 
import '../home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="intro">
      <h2>Kaliswari Swaminathan</h2>
      <p>A full-stack developer with expertise in ReactJS, Java, MySQL, and MongoDB is a versatile professional adept at building robust and scalable web applications. Proficient in front-end development using ReactJS for creating dynamic and user-friendly interfaces, they also excel in back-end development with Java to ensure efficient server-side operations. With database management skills in both relational (MySQL) and non-relational (MongoDB) systems, they handle diverse data storage needs seamlessly. Additionally, their knowledge of AWS empowers them to deploy, scale, and manage applications in the cloud, ensuring high availability and performance.</p>
      <a href="#projects" className="cta-button">See My Work</a>
      </div>
      
    </section>
  );
};

export default Home;

