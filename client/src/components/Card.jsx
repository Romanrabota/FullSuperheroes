import {Cardwrapper,Name,Userimg,Description,Cathphrase,Superpower} from "./style"

  export const Card =({item})=>{

     return (
    
    
     <div>
     <Cardwrapper>
      
      <Userimg src={`http://localhost:3000/${item.images}`} /> 
        <h2> <Name><div> {item.nickname} </div></Name></h2> 
         <p> <h3>{item.realname}</h3></p>
        <p> <Description>{item.origin_description}</Description></p>
        <p> <Superpower>{item.superpowers}</Superpower></p>
        <p> <Cathphrase>{item.cath_phrase}</Cathphrase></p>

        </Cardwrapper>
        </div>
     
      
) 
}

export default Card;