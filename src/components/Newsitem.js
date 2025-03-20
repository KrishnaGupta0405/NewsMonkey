import React, { Component } from 'react';
import "../index.css"

export class Newsitem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, source, author, publishedAt} = this.props
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:"flex", justifyContent: "flex-end", position:"absolute",right:"0"}}>
            <span className='badge rounded-pill bg-danger text-light'>{source}</span>
          </div>
            <img src={imageUrl} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Author- {author} </p>
                <p>Published At-{publishedAt}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More...</a>
            </div>
        </div>  
      </div>
    )
  }
}

export default Newsitem

// import React, { Component } from 'react';
// import "../index.css"
// import {Button} from "@nextui-org/react";

// export class Newsitem extends Component {
    
//   render() {
//     let {title, description, imageUrl, newsUrl, source, author, publishedAt} = this.props
//     return (
//       <div className='my-3'>
//         <div className="card">
//           <div style={{display:"flex", justifyContent: "flex-end", position:"absolute",right:"0"}}>
//             <span className='badge rounded-pill bg-danger text-light'>{source}</span>
//           </div>
//           <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2024/06/27/1600x900/ge517b1e10929968864205_1719496357866_1719496358202.jpg"} className="card-img-top" alt=""/>
// <div className="card-body">
//               <h4 className="font-bold text-large">{title}</h4>
//               <p className="text-tiny uppercase font-bold">{description}</p>
//               {({author})? (<small className="text-default-500">Author- {author} <br/>Published At-{publishedAt} </small>):""}
//                   {/* <h5 className="card-title"></h5> */}
//                   {/* <p className="card-text"></p> */}
//                   {/* <p className="card-text"></p> */}
//                   {/* <p></p> */}
//                   {/* <a href={newsUrl} target="_blank"  className="btn btn-sm btn-primary">Read More...</a> */}
//               <Button href={newsUrl} className='h-8 mt-3' target="_blank" color="primary" variant="ghost" style={{display:"block"}}>Read More...</Button>  
//             </div>
//         </div>  
//       </div>
//     )
//   }
// }

// export default Newsitem


