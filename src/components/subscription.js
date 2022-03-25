import React from "react"
import styled from "styled-components"
const Container=styled.div`

height:90vh;
width:100vw;
display:flex;

flex-direction:column;
align-items:center;
p{
   
    font-size:25px;
}
button{
    width:250px;
    height:40px;
    background-color:rgba(59, 89, 152, 1);
  border-radius:5px;
  border:none;
  font-size:18px;
  color:white;
}
hr{
    margin-top:30px;
    width:600px;
    height:0.5px;
    color:black;
    background-color:black;
}
strong{
    margin-top:20px;
    font-size:40px;
    font-weight:400px;
}
small{
    margin-top:30px;
    font-size:18px;
}
`

const Boxes=styled.div`
margin-top:30px;
height:250px;
width:50vw; 
display:flex;
align-items:center;
justify-content:space-between;
`
const Box=styled.div`
height:100%;
width:30%;
border-radius:5px;
padding:10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
display:flex;
flex-direction:column;
margin:0px;
p{
    font-siz:10px;
    
}
strong{
    font-size:10px;
}
`

const subscription=()=>{

return(
<Container>
    <p>Thank you for completing your profile <b>, your listing has been created </b></p>
    <button>  Continue with Free Plan   </button> 
    <hr></hr>
    <strong>Go Premium. Get more Project Enquiries</strong>
    <small>Choose one of our easy plan & Create higher visibility </small>
    <Boxes>
        <Box>
            <p>3 month</p>
            <b><strong>999$/</strong>month</b>
            <ul>
                <li>
                Min 4 Projects Enquiries/ month
                </li>
                <li>
                Unlimited Access to Project Enquiries
                </li>
                <li>
                Monthly Exclusive Articles on iDesign
      Magazine
                </li>
            </ul>
            <button>BUY NOW</button>
        </Box>
        <Box>
            <p>3 month</p>
            <b><strong>999$/</strong>month</b>
            <ul>
                <li>
                Min 4 Projects Enquiries/ month
                </li>
                <li>
                Unlimited Access to Project Enquiries
                </li>
                <li>
                Monthly Exclusive Articles on iDesign
      Magazine
                </li>
            </ul>
            <button>BUY NOW</button>
        </Box>
        <Box>
            <p>3 month</p>
            <b><strong>999$/</strong>month</b>
            <ul>
                <li>
                Min 4 Projects Enquiries/ month
                </li>
                <li>
                Unlimited Access to Project Enquiries
                </li>
                <li>
                Monthly Exclusive Articles on iDesign
      Magazine
                </li>
            </ul>
            <button>BUY NOW</button>
        </Box>
    </Boxes>
</Container>
)


}

export default subscription;