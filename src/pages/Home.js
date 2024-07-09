import dev from '../assets/dev.png';
 function Home()
{
   return (
    <section id="Home">
      < div className="home">
         <nav>
       <h1>Portfolio</h1>
         <ul>
           <a href="#"><i class="fa-brands fa-github"></i></a>
           <a href=""><i class="fa-brands fa-linkedin"></i></a>
           <a href="#"><i class="fa-brands fa-instagram"></i></a>
           <a href=""><i class="fa-brands fa-twitter"></i></a>
         </ul>
        </nav>
      <div className="content">
       <div className="row">
         <div className="col-lg-4 col-md-4 col-12">
            <div className="navs">
         <ul>
           <list> <a href="#Home"> <i class="fa-solid fa-house"></i>Home </a></list>
           <list> <a href="#About"> <i class="fa-solid fa-user"></i>About Me </a></list>
           <list> <a href="#Skills"> <i class="fa-solid fa-graduation-cap"></i>Skills </a></list>
           <list> <a href="#Project"> <i class="fa-solid fa-diagram-project"></i>Projects </a></list>
           <list> <a href="#contact"> <i class="fa-solid fa-phone"></i>Contact Me</a></list>
         </ul>
        </div>
       </div>
    
        <div className="col-lg-4 col-md-4 col-12">
         <div className="intro">
          <h3>Hii I am Rajathi web <span>developer!!</span> </h3>
           <p> I am able to build a creativity website,and most intrest in frontend developing.. </p>
           <button>Hire Me</button>
         </div>
        </div>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="img">
          <img src={dev} alt='img'/>
       </div>
       </div>
     </div>
      </div>
  </div>
 </section>
      
   );
};
export default Home;