import  styled from "styled-components"

//Media iPhone XR

export const Cardcontainer = styled.div`
display: flex;
width: 100%;
flex-flow:row wrap;
justify-content:center;

@media(max-width:414px){
    display : flex;
     width: 50%;     
 }
`



export const Cardwrapper = styled.div`
width: 420px;
height:460px; 
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin:10px;

h2 {
    text-align: center;
} 

@media(max-width:414px){
   width:395px;
   margin:10px;
   justify-content:center;
}
`

export const Name = styled.div`
display: flex;
flex-direction: column;
`

export const Userimg = styled.img`
    width:150px;
    height:150px;
    border-radius: 50%;
    margin-top:-30px;
`

export const Input = styled.input`
display: flex;
justify-content:center;
margin-top:10px;
` 


export const Inputdiv = styled.div`
display: flex;
justify-content:center;
` 


export const Paginationdesign = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
` 


export const Description = styled.div`

margin-bottom:-80px;
margin-top:-10px;
justify-content:center;
margin-left:20px;
@media(max-width:414px){
    margin-left:30px;
    justify-content:center;
 }
` 


export const Pageitem  = styled.div`
width: 25px;
    height: 25px;
    color: blue;
    border: 1px solid black;
    transition: transform ease 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

` 

export const Pagelink  = styled.div`

    color: grey;
` 