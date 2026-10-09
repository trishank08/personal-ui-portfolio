import React, { useState } from 'react'

export const App = () => {

  const [num, setnum] = useState(0)


function increaseNum(){
  setnum(num+1)
  
}
function decreaseNum(){
 setnum(num-1)
}
function jumby5(){
 setnum(num+5)
}
function jumback5(){
 setnum(num-5)
}

  return (
    <div >
      <h1 >{num}</h1>
      <div id='hello'>
        <div>
        <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      </div>
      <div>
        <button onClick={jumby5}>jump by 5</button>
      <button onClick={jumback5}>jump b2 -5</button>
      </div>
      </div>
    </div>
  )
}
 export default App