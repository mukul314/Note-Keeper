// import { text } from 'express'
import React, {useState} from 'react'

 

function TextForm(props) {


 const [text, setText] = useState('teri maa ka sakinaka');
 
 
 return(

<div>

<div class="mb-3">
  <label for="myText" class="form-label">{props.heading}</label>
  <textarea class="form-control" value={text} id="myText" rows="8"></textarea>


</div>
  <button className='btn btn-primary'>Convert to uppercase</button> 

  </div>

 )
 
 
  
}

export default TextForm