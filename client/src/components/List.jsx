import React, {useState,useEffect}  from "react";
import {getSuper}  from  '../api';
import {Cardcontainer} from "./style"
import {Card} from "./Card"


const List =()=>{
const [superheros,setSuperheros] = useState([]);

useEffect(()=>{
    getSuper().then(data => {
      const results = data;
      console.log("results",results);
      setSuperheros(results);
      console.log("superheros:",superheros)}
    );
    }, []); 


   


    console.log("superheros1:",superheros)


const renderheros = () => {
       
return  superheros.map((item)=> <Card item={item} key={item.id}/>)
   
   
}


return (
    <>

     <section> <Cardcontainer>{renderheros()}</Cardcontainer></section>
    
        
    </>
    )



}










export default List;