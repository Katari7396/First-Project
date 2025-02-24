import React, { useState } from 'react';

const Signin = () => {

  const [isLoggedIn] = useState('');

  if (isLoggedIn) {
    return <h1>WELCOME TO MY PAGE</h1>;
  } else {
    return <h2>Please sign in</h2>;
  }
};

export default Signin;

// import React, { useState } from 'react';

// const MenuCard = () => {

//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [isSpecialOfferAvailable] = useState(true);
//   const [itemAvailable] = useState(true);

//   return (
//     <div>
//       <h2>PIZZA</h2>

//       {isSpecialOfferAvailable ? (
//         <p className="offer">OFFER : 40% off!</p>
//       ) : (
//         <p className="offer">No special offers at the moment</p>
//       )}

//       {itemAvailable ? (
//         <p className="availability">This item is available at the moment</p>
//       ) : (
//         <p className="availability">Sorry, the item is out of stock</p>
//       )}

//       {isLoggedIn ? (
//         <button> Order Now </button>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>Login to Order</button>
//       )}
//     </div>
//   );
// }

// export default MenuCard;