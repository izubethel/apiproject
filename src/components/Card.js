import React from 'react'


const Card = ({userProfile}) => {
  return (
    <div className=''>
        {
        userProfile.map((data) => {
            return(
              <div 
              className=' bg-dark dib br3 ma1 ma3 pa3 tc'
              onClick={() => alert("hello")}
              key={data.id}>
                  
                <img alt='avatar' class="br-100 h4 w4 dib ba b--black-05 pa2" src= {data.avatar_url} /><br/>
                <p className="f5 fw4 white" >{data.login}</p>
                
              </div>
              
            )
             
        })
      }
  </div>
  )
}

export default Card;
