import React from 'react'

function Reistertion() {
    const [formdata, setFormData]=useState({
     name:"", 
    })
  return (
    <div>
      <input type='text' placeholder='eneter your name 'name= 'name' id  = 'name'value={formdata}/>
      <input  type=''/>
    </div>
  )
}

export default Reistertion
