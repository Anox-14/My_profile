import './App.css'
import krishna from './assets/krishna.webp';
function App() {
  

  return (
    <>
      

<div class="navbar">
    <h2>Anup.</h2>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
    </ul>
    {/* <!-- <button class="hire-btn">Hire Me</button> --> */}
</div>

<div class="main">
    <h4>Hi, I Am <span>Anup Dubey</span> 👋</h4>
    <p class="title">Creative Frontend && basic of backend  Web Developer</p>
    <p class="subtitle">I'm Design And Code Beautifully Simple Things And I Love What I Doing!</p>
    <img src={krishna}/>
</div>

<div class="guarantee">
    <div class="item">
        <div class="icon">
            <i class='bx bx-check-shield'></i>
        </div>
        <div class="info">
            <h3>+1</h3>
            <p>Years Of Experiences</p>
        </div>
        <i class='bx bx-chevron-right'></i>
    </div>
    <div class="item">
        <div class="icon">
            <i class='bx bx-check-circle'></i>
        </div>
        <div class="info">
            <h3>+5</h3>
            <p>Completed Projects</p>
        </div>
        <i class='bx bx-chevron-right'></i>
    </div>
    <div class="item">
        <div class="icon">
            <i class='bx bx-laugh'></i>
        </div>
        <div class="info">
            <h3>+50</h3>
            <p>Happy Clients</p>
        </div>
        <i class='bx bx-chevron-right'></i>
    </div>
</div>

<h5 class="seprator">Who I Am</h5>

<div class="about">
    {/* <!-- <img src="assets/image.png"> --> */}
    <div class="info">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eveniet vitae fugit accusamus, cupiditate
            labore quae officia sunt enim consectetur eligendi sit mollitia iste doloribus libero odio, quidem optio
            autem!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eveniet vitae fugit accusamus,
            cupiditate labore quae officia sunt enim consectetur eligendi sit mollitia iste doloribus libero odio,
            quidem optio autem!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eveniet vitae fugit accusamus,
            cupiditate labore quae officia sunt enim consectetur eligendi sit mollitia iste doloribus libero odio,
            quidem optio autem!
        </p>
        {/* <button class="hire-btn">Hire Me</button> */}
    </div>
</div>

<h5 class="seprator">My Skills</h5>

<div class="skills">
    <div class="left">
        <div class="info">
            <h3>What My Programming Skills Included?</h3>
            <p>
                I develop simple, intuitive and responsive user interface that helps users get things done with less
                effort and time with those technologies.
            </p>
        </div>
        <button class="hire-btn">Hire Me</button>
    </div>

    <div class="right" >
        <div class="item" title="html5">
            <i class='bx bxl-html5'></i>
        </div>
        <div class="item" title="css">
            <i class='bx bxl-css3'></i>
        </div>
        <div class="item" title="git">
            <i class='bx bxl-git'></i>
        </div>
        <div class="item" title="bootstrap">
            <i class='bx bxl-bootstrap'></i>
        </div>
        <div class="item" title="tailwind-css">
            <i class='bx bxl-tailwind-css'></i>
        </div>
        <div class="item" title="Mongodb">
            <i class='bx bxl-mongodb' ></i>
        </div>
        <div class="item" title="react">
            <i class='bx bxl-react'></i>
        </div>
    </div>

</div>

<footer>
    <div class="start">
        <h3>Start a project</h3>
        <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
        <button>Let's do this</button>
    </div>

    <div class="cols">
        <div class="about-col">
            <h3>Anup.</h3>
            <p>Creative FullStack Developer</p>
        </div>

        <div class="links-col">
            <h4>Useful Links</h4>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </div>

        <div class="links-col">
            <h4>Social Media</h4>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            <a href="#">Dribble</a>
            <a href="#">Youtube</a>
            <a href="#">Github</a>
        </div>

        <div class="news-col">
            <h4>NewsLetter</h4>
            <p>Enter your email and get notified about news, of.</p>

            <form>
                <input type="email" placeholder="Your email address"/>
                <button><i class='bx bxl-telegram'></i></button>
            </form>

        </div>

    </div>

</footer>


    </>
  )
}

export default App
