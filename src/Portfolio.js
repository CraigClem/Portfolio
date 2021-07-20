import React from 'react'

function Portfolio () {
  return (
    <>
    <h1>Projects</h1>
      <div className="portfolio" id="portfolio">
        <div className="project-container">
          <div className="project-image">
            <a href="https://craigclem.github.io/SpaceInvader-Game/" target="_blank" rel="noreferrer">
              <img src="https://i.imgur.com/qnQI0qb.png"/>
            </a>
          </div>
          <div className="project-text">
            <h2>Space Invaders</h2>
            <p>Using JavaScript, CSS and HTML I had one week to build a grid based game to help consolidate and showcase the JS fundamentals learned from the course at the time.</p>
            <a href="https://github.com/CraigClem/SpaceInvader-Game">
              <i className="devicon-github-original-wordmark colored"></i>
            </a>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">
            <a href="https://ga-react-punk-api.netlify.app/" target="_blank" rel="noreferrer">
              <img src="https://i.imgur.com/nkyr7q8.png"/>
            </a> 
          </div>
          <div className="project-text">
            <h2>Beer API</h2>
            <p>We had 48 hours to build a React App where we used a third party API to populate our site with data. Prior to this project we spent 2 weeks in class learning the fundamentals of React from axios GET and POST requests to React State and JSX.
            </p>
            <a href="https://github.com/CraigClem/project2">
              <i className="devicon-github-original-wordmark colored"></i>
            </a>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">
            <a href="https://peek-social-media-app.netlify.app/" target="_blank" rel="noreferrer">
              <img src="https://i.imgur.com/K8UfWIE.png"/>
            </a>
          </div>
          <div className="project-text">
            <h2>Peek</h2>
            <p>We had just over 1 week to create a full-stack MERN app with CRUD functionality. As a group we created a social media platform where the users would gain “Peek Coins” for receiving likes on their posts and which in turn would then showcase their Peek status.</p>
            <a href="https://github.com/CraigClem/project-3-client">
              <i className="devicon-github-original-wordmark colored"></i>
            </a>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">
            <a href="https://project-expo-project-4.netlify.app/ "target="_blank" rel="noreferrer">
              <img src="https://i.imgur.com/O6cr7h0.png"/>
            </a>
          </div>
          <div className="project-text">
            <h2>ProjectExpo</h2>
            <p>We had just over 1 week to create a full-stack app with CRUD functionality similar to project 3, however for this project we built the back-end of the app using Django and Python. We decided to create a platform where GA students could upload their completed projects and Instructors could easily access them in one place to show other students examples and provide inspiration.</p>
            <a href="https://github.com/CraigClem/Server">
              <i className="devicon-github-original-wordmark colored"></i>
            </a>
          </div>
        </div>
      </div>
      <br/>
    </>
  
  )
}

export default Portfolio 