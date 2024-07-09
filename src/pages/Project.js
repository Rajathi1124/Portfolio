import darkbg from '../assets/darkbg.jpg';
import author from '../assets/author.jpg';
import lancome from '../assets/lancome.jpg';
import cake1 from '../assets/cake1.jpg';
import cake2 from '../assets/cake2.jpg';
import cake3 from '../assets/cake3.jpg';
function Project(){
return(
    <section id="Project">
        <h1>What I Did !</h1>
        <h3>Woww Fragurance...(based on Html & CSS)</h3>
         <div className="rowss">
        
      <div className="col-lg-3 col-md-3 col-12">
            <div className="wrapper">
              <div className='imgg'>
                <img src={darkbg} alt='img'/>
                 <div className='cont'>
               <h2>Good breathe</h2>
                <p>smell of the Fragurance</p>
               </div>
             </div>
            
          <div className='imgg'>
            <img src={author} alt='img'/>
               <div className='cont'>
              <h2> Choices Is Yours </h2>
               <p>variety of  Pefumes</p>
                </div>
            </div>
            
          <div className='imgg'>
            <img src={lancome} alt='img'/>
              <div className='cont'>
              <h2>New Fresh</h2>
              <p>Gives some Energy</p>
               </div>
            </div>
           </div>   
           </div>
    <h3>Bloody Sweet...(based on bootstrap)</h3>
        <div className="col-lg-3 col-md-3 col-12">
            <div className="wrapper">
               <div className='imgg'>
                <img src={cake1} alt='img4'/>
               <div className='cont'>
              <h2>Tasty Tongue</h2>
            <p>Remember Some Moments</p>
          </div>
          </div>
            
           <div className='imgg'>
              <img src={cake2} alt='img4'/>
                <div className='cont'>
                <h2> Once More</h2>
                <p>Really Want Again</p>
           </div>
           </div>
            
           <div className='imgg'>
              <img src={cake3} alt='img4'/>
                    <div className='cont'>
              <h2>Attract By Eyes</h2>
            <p>Let's Take It</p>
           </div>
           </div>

            </div>   
           </div>
        </div>
        

    </section>
)
}
export default Project;