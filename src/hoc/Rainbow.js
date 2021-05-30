import React from 'react';


const Rainbow = (WrapedComponent) => {
   const colours = ['red', 'pink', 'green', 'orange', 'blue', 'yellow']
   const randomcolour = colours[Math.floor(Math.random() * 5)]
   const className = randomcolour + '-text'

   return (props) => {
       return (
           <div className={className}>
              <WrapedComponent  {...props}/>
           </div>
       )
   }
}
 
export default Rainbow;