import {Cardwrapper,Name,Userimg,Description} from "./style"

  export const Card =({item})=>{

     return (
    
    
     <div>
     <Cardwrapper>
      
      <Userimg src={item.images} /> 
        <h2> <Name><div> {item.nickname} </div></Name></h2> 
        <p>{item.realname}</p>
        <p> <Description>{item.origin_description}</Description></p>
        <p> <Description>{item.superpowers}</Description></p>

        </Cardwrapper>
        </div>
     
      
) 
}

export default Card;