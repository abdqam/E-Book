import React,{useState} from 'react'
import './page.css'
import { Link } from '@reach/router';

export default props => {

 // var imageName = require('../img/test.jpg');
const styles={
   display:"flex",
  justifyContent:"space-around",
  width:"90%",
  flexWrap: "wrap",
  margin:"0 auto",


}

    return (


<div style={styles}>
  {

props.books.map((book, index)=>{
  // let image = require(book.image);
return(
      // <div style={{flex:"25%",height:"400px"}}>
      // <div>
      //         {book.name}<br/>
      //         {book.image}<br/>
      //         {book.description}<br/>
      //       {book.url}<br/>
      //       </div>
      // </div> 
      
      

<div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
    
    <img src={`../img/${book.image}`} alt={book.image} style={{width:"100%",height:"100%",borderRadius:"15px",border:"0px solid gray"}}/>
    {/* <img src= {image.default}/><br/> */}
    </div>
    <div className="flip-box-back" >
      
      <h3>{book.name}</h3>
      <h4>{book.description}</h4>
      <h2><a href={"http://"+book.url} class="trailer-btn">DownLoad</a></h2>
    </div>
  </div>
</div>





     ) })
  }
</div>

)
}


  

 {/* show%4?  
<div className="container">
<div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
    {props.book.name}
   
    <img src={`../img/${props.book.image}`} alt={props.book.image}/>
    </div>
    <div className="flip-box-back">
      <h2>{props.book.description}</h2>
      <a href={"http://"+props.book.url}>Download</a>
    </div>
  </div>
</div>
</div>
:
<br/>
 }
</>
    )
} */}
