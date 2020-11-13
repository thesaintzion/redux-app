import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from '../assets/img/mobile-dev.jpg';
import img2 from '../assets/img/bonus.jpg';
import img3 from '../assets/img/financial2.jpg';
import img4 from '../assets/img/consult.jpg';



export default class Owl extends Component {
    render() {
        return (  
            <div>  
          <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >  
       <div className="row">
           <div className="col-lg-9 mx-auto">
           <OwlCarousel items={4}  
        //   className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {img1}/>
           </div>  
           <div><img  className="img" src= {img2}/></div>  
           <div ><img  className="img" src= {img3}/></div>  
           <div><img  className="img" src= {img4}/></div> 
           
           <div ><img  className="img" src= {img1}/></div>  
           <div><img  className="img" src= {img2}/></div>  
           <div ><img  className="img" src= {img3}/></div>  
           <div><img  className="img" src= {img4}/></div> 
      </OwlCarousel>  
           </div>
           </div>          
       
      </div>  
  
      </div>  
          )  
    }
}
