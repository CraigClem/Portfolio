import React from 'react'

function Technologies() {
  
  const [isShown, setIsShown] = React.useState(false) 

  const handleClick = () => {
    setIsShown(!isShown)
  }

  return (

    <div className="tech" id="tech"> 
      <div className="tech-container">
        <div className="tech-icon" value="JavaScript">
          <i className="devicon-javascript-plain colored" onClick={handleClick}></i>
          {isShown && 
        <p>JAVASCRIPT</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-react-original colored" onClick={handleClick}></i>
          {isShown && 
        <p>REACT</p>
          }
        </div>
        
        <div className="tech-icon">
          <i className="devicon-css3-plain colored" onClick={handleClick}></i>
        
          {isShown && 
        <p>CSS3</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-django-line-wordmark colored" onClick={handleClick}></i> 
       
          {isShown && 
        <p>DJANGO</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-github-original-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>GITHUB</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-html5-plain colored" onClick={handleClick}></i>
          {isShown && 
        <p>HTML5</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-jest-plain colored" onClick={handleClick}></i>   
          {isShown && 
        <p>JEST</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-mongodb-plain-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>MONGO DB</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-nodejs-plain colored" onClick={handleClick}></i> 
          {isShown && 
        <p>NODE.JS</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-npm-original-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>NPM</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-postgresql-plain-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>POSTGRESQL</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-python-plain-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>PYTHON</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-sass-original colored" onClick={handleClick}></i>
          {isShown && 
        <p>SASS</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-slack-plain-wordmark" onClick={handleClick}></i>  
          {isShown && 
        <p>SLACK</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-trello-plain-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>TRELLO</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-vscode-plain colored" onClick={handleClick}></i> 
          {isShown && 
        <p>VS CODE</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-babel-plain colored" onClick={handleClick}></i>
          {isShown && 
        <p>BABLE</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-express-original-wordmark colored" onClick={handleClick}></i>
          {isShown && 
        <p>EXPRESS</p>
          }
        </div>
        <div className="tech-icon">
          <i className="devicon-heroku-line colored" onClick={handleClick}></i>
          {isShown && 
        <p>HEROKU</p>
          }
        </div>
      </div>
    </div>

  )
}

export default Technologies