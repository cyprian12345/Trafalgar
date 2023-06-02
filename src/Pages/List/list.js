import React from 'react'
import "./list.css"
import LINE from "../../assets/line.png"
import image2 from "../../assets/image 2.png"
function list() {
  return (
    <div className='container'>
        <h1 className='sss mr-50'>Check out our latest article</h1>
        <img src={LINE} alt="line" className='down-img'/>

       
          <div className='row'>

            <div className='col-md-4'>
              <div className='service-section-img mb-3'>
                 <img src={image2} alt=""/>
              </div>

              <div className='service-section-body'>
                    <h3 className='mb-3'>Details info</h3>
                    <p>Free consultation with our trusted <br/> doctors and get the best <br/> recomendations</p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='service-section-img mb-3'>
                 <img src={image2} alt=""/>
              </div>

              <div className='service-section-body'>
                    <h3 className='mb-3'>Details info</h3>
                    <p>Free consultation with our trusted <br/> doctors and get the best <br/> recomendations</p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='service-section-img mb-3'>
                 <img src={image2} alt=""/>
              </div>

              <div className='service-section-body'>
                    <h3 className='mb-3'>Details info</h3>
                    <p>Free consultation with our trusted <br/> doctors and get the best <br/> recomendations</p>
              </div>
            </div>


          </div>

        
    </div>
  )
}

export default list