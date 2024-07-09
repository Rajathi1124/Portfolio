function Contact(){

    return(
        <section id="contact">
            <h1>How You Reach Me !</h1>
            <div className="reach">
               
               <div className="row">
                <div className="col-lg-4 col-md-4 col-12"> 
                <div className="aside">
                <i class="fa-solid fa-envelope"></i>
           <h5>Email</h5>
               <p>me@gmail.com</p>
               <button>write Me </button>
           </div> <br></br>

           < div className="aside">
            <i class="fa-brands fa-square-whatsapp"></i>
           <h5>Whatsapp</h5>
             <p>467-346-2344</p>
             <button>write Me </button>
           </div> <br></br>
</div>
        
        <div className="col-lg-4 col-md-4 col-12">
         <div className="aside1">
            <span><input type="username" placeholder="name"/> </span> <br></br>
            <span><input type="email" placeholder="E-mail"/> </span><br></br>
            <span><input type="number" placeholder="Phone"/></span> <br></br>
            <textarea rows={5} cols={35} placeholder="Message"></textarea>
            <button>send message</button>        </div>

</div>



    </div>
      </div>
           

    ~</section>
    )
}
export default Contact;