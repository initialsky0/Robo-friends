import React from 'react';

const Card = ({ roboName, roboContact, roboId }) => {

   return(
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
         <img src={`https://robohash.org/${roboId}?size=200x200`} alt="robots" />
         <div>
            <h3>{roboName}</h3>
            <p>{roboContact}</p>
         </div>
      </div>
      )
}

export default Card;