import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
   /* if(true) {
      throw new Error('Noooooo!');
   } */
   // Error Boundary check

   return(
      <div>
         {robots.map((user, i) => {
               return(
                  // key is required to keep track of cards in react.
                  <Card key = {i}
                        roboName = {user.name} 
                        roboId = {user.id}
                        roboContact = {user.email}/>
                  );
               })
         }
      </div>
      );
}

export default CardList;