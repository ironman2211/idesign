import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Boxes = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  gap: 10px;
  margin: auto auto;
`;

const Box1 = styled.div`
  width: 65%;
  height: 100%;
`;
const Box2 = styled.div`
  width: 35%;
  height: 100%;
`;

const Projects = styled.div`
  height: 35px;
  width: 98%;
  margin-top: 50px;
  display: flex;
  gap: 30px;
  flex-direction: flex-start;
  border-bottom: 2px solid rgba(136, 136, 136, 1);

  div {
    display: flex;
    cursor: pointer;
    justify-content: center;
    width: 70px;
    box-sizing: border-box;
    font-weight: 400;
    color: rgba(136, 136, 136, 1);
    &:hover {
      border-bottom: 5px solid #3b5998;
    }
  }
`;

const Card = styled.div`
  width: 91%;
  height: 70%;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  span {
    width: 160px;
    height: 34px;
    top: 30px;
    left: 30px;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
  }

  div {
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;
    display: flex;
    gap: 30px;
  }
`;

const Multicards = styled.div`
  height: 71%;
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Edit = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  border: 2px solid rgba(59, 89, 152, 1);
  margin-top: 30px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: rgba(59, 89, 152, 1);
  font-weight: 400px;
`;
const Confirm = styled.button`
  width: 100%;
  height: 100px;
  background-color: rgba(59, 89, 152, 1);
  cursor: pointer;
  margin-top: 30px;
  height: 50px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: white;
  font-weight: 400px;
`;
const Card2 = styled.div`
  gap: 30px;
  width: 90%;
  height: 100px;
  // background-color:red;
  margin-top: 115px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
  display: flex;
  padding: 20px;
  div {
    background-color: rgba(59, 89, 152, 0.28);
    height: 100px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 20px;
      height: 80px;
      width: 80px;
    }
  }
`;
const Login = styled.main`
  opacity: 1;
  position: absolute;
  margin: auto;
  height: 400px;
  width: 400px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  // box-sizing:border-box;
  padding: 0px 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
  color: black;
  gap: 20px;
  hr {
    background-color: grey;
    color: blue;
    height: 0.5px;
    width: 70%;
    &:after {
      font-size: 20px;
      content: "or";
      color: black;
    }
  }

  p {
    color: black;
    font-size: 25px;
    margin: 0px;
    padding: 0px;
    margin-top: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    input {
      border: 2px solid grey;
      border-radius: 5px;
      height: 25px;
    }
  }
`;
const Create = styled.button`
  background-color: rgba(59, 89, 152, 1);

  border: none;
  height: 35px;
  color: white;
  border-radius: 5px;
  diplay: flex;
  align-items: center;
  justify-content: center;
  font: 18px;
`;
const Signup = styled.button`
  color: rgba(59, 89, 152, 1);
  border: none;
  height: 35px;

  border-radius: 5px;
  border: 2px solid rgba(59, 89, 152, 1);
  diplay: flex;
  align-items: center;
  justify-content: center;
  font: 20px;
`;
const Description = styled.aside`
  display: flex;
  flex-direction: column;
`;
const Confirmation = () => {
  const navigate=useNavigate();
  const [login, setLogin] = useState(false);
  const handleclick = () => {
    setLogin(!login);
    console.log(login);
  };

  return (
    <>
      <Container>
    
        <Boxes>
          <Box1>
            <Projects>
              <div>Project 1</div>
              <div>Project 2</div>
              <div>Project 3</div>
            </Projects>

            <Card>
              <span>Project Title</span>
              <div>
                <small>Building Name</small> <small>City</small>
              </div>
              <Multicards>
                <img src="./images/card-image.jpg" alt="this is an card"></img>
                {/*            
            <div>
              <img src="./images/card-image.jpg" alt="this is an casd"></img>
              <img src="./images/card-image.jpg" alt="this is an card"></img>
            </div> */}
              </Multicards>
            </Card>
          </Box1>
          <Box2>
            <Card2>
              <div>
                <svg
                  width="95"
                  height="93"
                  viewBox="0 0 95 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64.6673 33.8748C64.6673 38.3393 62.8587 42.6209 59.6393 45.7778C56.4199 48.9347 52.0535 50.7082 47.5007 50.7082C42.9478 50.7082 38.5814 48.9347 35.362 45.7778C32.1426 42.6209 30.334 38.3393 30.334 33.8748C30.334 29.4104 32.1426 25.1287 35.362 21.9719C38.5814 18.815 42.9478 17.0415 47.5007 17.0415C52.0535 17.0415 56.4199 18.815 59.6393 21.9719C62.8587 25.1287 64.6673 29.4104 64.6673 33.8748V33.8748ZM56.084 33.8748C56.084 36.1071 55.1797 38.2479 53.57 39.8263C51.9603 41.4048 49.7771 42.2915 47.5007 42.2915C45.2242 42.2915 43.041 41.4048 41.4313 39.8263C39.8216 38.2479 38.9173 36.1071 38.9173 33.8748C38.9173 31.6426 39.8216 29.5018 41.4313 27.9234C43.041 26.3449 45.2242 25.4582 47.5007 25.4582C49.7771 25.4582 51.9603 26.3449 53.57 27.9234C55.1797 29.5018 56.084 31.6426 56.084 33.8748V33.8748Z"
                    fill="#6185D2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.5003 0.208252C21.4285 0.208252 0.291992 20.9343 0.291992 46.4999C0.291992 72.0655 21.4285 92.7916 47.5003 92.7916C73.5722 92.7916 94.7087 72.0655 94.7087 46.4999C94.7087 20.9343 73.5722 0.208252 47.5003 0.208252ZM8.87533 46.4999C8.87533 55.2953 11.9353 63.3922 17.0638 69.8225C20.6655 65.1845 25.312 61.4258 30.6402 58.8401C35.9685 56.2543 41.8342 54.9115 47.7793 54.9166C53.6474 54.9111 59.4394 56.2192 64.7139 58.741C69.9884 61.2629 74.6063 64.9321 78.2158 69.469C81.9343 64.6867 84.438 59.1048 85.5197 53.1852C86.6015 47.2657 86.2302 41.1786 84.4365 35.4277C82.6429 29.6768 79.4785 24.4274 75.2051 20.1138C70.9318 15.8002 65.6723 12.5465 59.862 10.6218C54.0516 8.69712 47.8574 8.15683 41.7918 9.04564C35.7262 9.93444 29.9637 12.2268 24.981 15.733C19.9982 19.2392 15.9386 23.8585 13.1379 29.2087C10.3373 34.5589 8.8761 40.4861 8.87533 46.4999V46.4999ZM47.5003 84.3749C38.6335 84.388 30.0344 81.3969 23.158 75.9077C25.9258 72.0223 29.6098 68.85 33.8966 66.6607C38.1833 64.4714 42.946 63.3299 47.7793 63.3332C52.5523 63.3295 57.2574 64.4424 61.5037 66.5797C65.7501 68.7169 69.4151 71.8166 72.1946 75.6216C65.2648 81.289 56.5239 84.3873 47.5003 84.3749V84.3749Z"
                    fill="#6185D2"
                  />
                </svg>
              </div>
              <Description>
                ABC Design Firm
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1384 12.9567L14.4519 12.65C13.8067 12.5759 13.1721 12.7981 12.7173 13.2529L10.7711 15.199C7.77787 13.6759 5.32404 11.2327 3.80097 8.22883L5.75769 6.2721C6.21249 5.8173 6.43461 5.18268 6.36057 4.53749L6.05384 1.87211C5.92692 0.803845 5.02789 0 3.94905 0H2.11925C0.924071 0 -0.0701525 0.994229 0.00388538 2.18942C0.564458 11.2221 7.78844 18.4355 16.8105 18.9961C18.0057 19.0702 18.9999 18.0759 18.9999 16.8807V15.0509C19.0105 13.9827 18.2066 13.0836 17.1384 12.9567Z"
                    fill="black"
                  />
                </svg>
                2987356223
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00001 0C4.02946 0 0 4.05042 0 9.04688C0 10.7178 0.325365 12.4436 1.25906 13.6875L9.00001 24L16.7409 13.6875C17.589 12.5577 18 10.5604 18 9.04688C18 4.05042 13.9706 0 9.00001 0ZM9.00001 5.23974C11.0914 5.23974 12.7874 6.94456 12.7874 9.04686C12.7874 11.1492 11.0914 12.854 9.00001 12.854C6.90858 12.854 5.21261 11.1492 5.21261 9.04688C5.21261 6.94456 6.90858 5.23974 9.00001 5.23974Z"
                    fill="black"
                  />
                </svg>
                Saket, New Delhi
              </Description>
            </Card2>

            <Confirm onClick={() => handleclick()}>
              Confirm your listing with iDesign
            </Confirm>
            <Edit>Edit Details</Edit>
          </Box2>
        </Boxes>  
       {


login?  <Login>
<p>Sign Up</p>
<div>
  <label>Email</label>
  <input placeholder=""></input>
</div>
<div>
<label>Email</label>
  <input></input>
</div>
<Create onClick={()=>navigate('process')}>Create Account</Create>
<hr></hr>
<Signup>Sign Up with Google</Signup>
</Login>:''
       }
      </Container>
    </>
  );
};
export default Confirmation;
