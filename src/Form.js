import React, { useState } from 'react';
import './Form.css';
import FormDisc from './FormDiscovery';


const Form = () => {



  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        
          <FormDisc />
        
      </div>
    </>
  );
};

export default Form;