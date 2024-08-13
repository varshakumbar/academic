import React from 'react';
import './academic.css';
import logo from '../../assets/acd-logo.png'; // Update the path accordingly
import { Link } from 'react-router-dom';
const Academic = () => {
  return (
    <div>
      <div className="academic-container-acd">
        <div className="overlay-acd">
          <div className="content-acd">
            <img src={logo} alt="University Logo" className="logo-acd" />
            <h1>Academics</h1>
            <p>Better Education For Better Life</p>
          </div>
        </div>
      </div>
      <div class="academic-section">
        <h2>Our Academics</h2>
        <p>
            At IIT Kharagpur, our academics are at the forefront of innovation and excellence. We offer a 
            diverse range of programs designed to foster critical thinking and creativity. Our faculty 
            comprises world-renowned experts dedicated to guiding students toward academic and professional
             success. Join us to experience a transformative education that prepares you for the challenges 
             of the future.
        </p>
        </div>
      <div class="container-12">
        <h1>Academics</h1>
        <div class="cards-12">
            <div class="card-12">
                <Link to="units"><h2> Academic Units</h2></Link>
               
          
            </div>
            <div class="card-12">
                <Link to="programs"><h2>Academic programs</h2></Link>
         
            </div>
            <div class="card-12"> 
    <a href="/rules.pdf" target="_blank" rel="noopener noreferrer">
        <h2>Academic Rules And Regulations</h2>
    </a>
</div>
        </div>
    </div>
    <div className='row-4 links-div'>
      <div className='col-md-4 part3'>
      <div className='graduate'>
      <i class="fa-solid fa-gears"></i>
    </div>
    <div className="links2">
        <h5 >
        <Link to="interdisciplinary" className="link-item">Interdisciplinary Programs
        </Link>
        </h5> 
        </div>
      </div>

      <div className="col-md-4  part3">
      <div className='graduate'>
      <i class="fa-solid fa-handshake"></i>
    </div>
      
    <div className="links2">
        <h5>
        <Link to="international" className="link-item">International Relations</Link>
        </h5>
      
       
        </div>
      </div>

      <div className="col-md-4  part3">
      <div className="graduate">
      <i class="fa-solid fa-user-group"></i>
    </div>
    <div className="links2">
        <h5>
        <Link to="contact" className="link-item">Contact Academic Section</Link>
        </h5>
       
        
        
        </div>
      </div>
    </div>

    </div>
  );
}

export default Academic;
