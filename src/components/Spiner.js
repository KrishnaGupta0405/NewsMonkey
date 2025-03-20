// import React, { Component } from 'react'
// import loading from './anime-character-traveling.gif'

// export class Spiner extends Component {
//   render() {
//     return (
//       <div className='text-center container'>
//         <img src={loading} alt="loading..." className='my-3' style={{height:"25px",width:"25px"}} />
//       </div>
//     )
//   }
// }

// export default Spiner
import React from "react";
import {Spinner} from "@nextui-org/react";

export default function App() {
  return (
    <div className='text-center container'>
    <Spinner className='my-3' label="Loading..." color="warning" />
    </div>
  );
}
