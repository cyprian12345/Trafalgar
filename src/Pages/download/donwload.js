import React from 'react'
import "./download.css"
import Page2 from "../../assets/Page2.png"
import Page21 from "../../assets/Page21.png"
import LINE from "../../assets/line.png"
import vek from "../../assets/Vector (1).png"

function download() {
  return (
    <div className='container labor'>
        <div className='row'>
            <div className='col-sm-12 col- md-12 col-lg-6'>
                <div className='down-section-img'>
                <img src={Page2} alt="" className='www'/>
                </div>
            </div>
            <div className='col-sm-12 col- md-12 col-lg-6 mt-5'>
                <div className='down-section-sec'>
                    <h2>Leading healthcare providers</h2>
                    <img src={LINE} alt="" className='down-img'/>
                    <p>Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and online for <br/> everyone. To us, it’s not just work. We take pride <br/> in the solutions we deliver</p>
                    <button className='down-btn'>Learn more</button>
                </div>
            </div>
        </div>
        <div className='row center'>   
            <div className='col-sm-12 col- md-12 col-lg-6 mt-5'>
                <div className='down-section-sec'>
                    <h2>Download Our <br/> mobile App</h2>
                    <img src={LINE} alt="" className='down-img'/>
                    <p>Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and online for <br/> everyone. To us, it’s not just work. We take pride <br/> in the solutions we deliver</p>
                    <button className='down-btn'>Download <img src={vek} alt=""></img></button>
                </div>
            </div>
                <div className='col-sm-12 col- md-12 col-lg-6'>
                  <div className='down-section-img'>
                     <img src={Page21} alt="" className='www'/>
                 </div>
            </div>
        </div>
      
    </div> 
  )
}

export default download