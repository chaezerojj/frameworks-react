import React from 'react';
import StarRating from './StarRating';

export default function ColorList({colors=[]}){
  return (
   <div>
       {colors.map(color=>(
           <section>
               <h1>{color.title}</h1>
               <div style={{height:50, backgroundColor:color.color}}></div>
               <StarRating selectedStars={color.rating}/>
           </section>
       ))}
   </div>
  ) 
}