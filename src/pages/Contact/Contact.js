import React from 'react'
import { Link } from 'react-router-dom'
import me from '/Users/mac/Desktop/jerrysiphair-react/src/Images/about/me1.JPG'
import '/Users/mac/Desktop/jerrysiphair-react/src/pages/Contact/Contact.css'

function Contact() {
    return (
        <div className="container">
        <div className="wrapper">

        <img className="me" src={me} alt="me" />
        </div>
<div className="content"></div>
<form>
  <label>
    Name:
    <input type="text" name="name" />
    
  </label>
  <label>
    Name:
    <input type="text" name="name" />
    
  </label>
  
</form>

        
        </div>
    )
}

export default Contact