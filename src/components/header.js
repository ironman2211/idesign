import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  color: black;
  left: 0px;
  top: 0px;
  background: #ffffff;

border-bottom:10px solid #4BFBFF;

  border-image: linear-gradient(90deg, #4BFBFF, #567C7E) 5;

`;

const Logo = styled.div`
padding:0px 25px;
display:flex;
align-items:center;
justify-content:space-between;

img{
    width: 40px;
    height: 40px;
}
span{
    font-size: 36px;
    font-family: 'Black Mango';
    font-weight: 400;
    line-height: 55px;
    color: #000000;
}
`;
const Boxes = styled.div`
padding-right:30px;  
display:flex;
width:225px;
height:45px;
diplay:flex;
justify-content:space-around;
div{
    height:35px;
    width:35px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    svg{
        height:17px;
        width:17px;
    }
    img{
        height:100%;
        width:100%;
        background-position:center;
        border-radius:50%;
    }
}
div:nth-child(1){
    background-color:blue;
}
div:nth-child(2){
    background-color:red;
}
div:nth-child(3){
    background-color:yellow;
}
`;
const Header = () => {
  return (
    <Navigation>
      <Logo>
        <img src="./images/logo.svg" alt="logo"></img>
        <span>iDesign</span>
      </Logo>

      <Boxes>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 16C5.60444 16 5.21776 16.1173 4.88886 16.3371C4.55996 16.5568 4.30362 16.8692 4.15224 17.2346C4.00087 17.6001 3.96126 18.0022 4.03843 18.3902C4.1156 18.7781 4.30608 19.1345 4.58579 19.4142C4.86549 19.6939 5.22186 19.8844 5.60982 19.9616C5.99778 20.0387 6.39991 19.9991 6.76537 19.8478C7.13082 19.6964 7.44318 19.44 7.66294 19.1111C7.8827 18.7822 8 18.3956 8 18C8 17.4696 7.78929 16.9609 7.41421 16.5858C7.03914 16.2107 6.53043 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.08458 12.3328 3.9984 12.6637 4 13C4.00158 13.5299 4.2128 14.0377 4.58753 14.4125C4.96227 14.7872 5.47005 14.9984 6 15H18V13H6.42C6.3871 13.0003 6.35447 12.994 6.32401 12.9815C6.29356 12.969 6.2659 12.9506 6.24263 12.9274C6.21936 12.9041 6.20096 12.8764 6.18849 12.846C6.17602 12.8155 6.16973 12.7829 6.17 12.75L6.2 12.63L7.1 11H14.55C14.9073 11.0011 15.2583 10.9061 15.5662 10.7249C15.8741 10.5436 16.1276 10.2829 16.3 9.97L19.88 3.48C19.9605 3.33295 20.0018 3.16765 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H4.21L3.27 0H0ZM16 16C15.6044 16 15.2178 16.1173 14.8889 16.3371C14.56 16.5568 14.3036 16.8692 14.1522 17.2346C14.0009 17.6001 13.9613 18.0022 14.0384 18.3902C14.1156 18.7781 14.3061 19.1345 14.5858 19.4142C14.8655 19.6939 15.2219 19.8844 15.6098 19.9616C15.9978 20.0387 16.3999 19.9991 16.7654 19.8478C17.1308 19.6964 17.4432 19.44 17.6629 19.1111C17.8827 18.7822 18 18.3956 18 18C18 17.4696 17.7893 16.9609 17.4142 16.5858C17.0391 16.2107 16.5304 16 16 16Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5003 18.9999L9.05026 17.6799C3.90026 13.0099 0.50026 9.92992 0.50026 6.14992C0.493179 5.42568 0.630604 4.7073 0.904497 4.03681C1.17839 3.36632 1.58325 2.75719 2.09539 2.24505C2.60753 1.73291 3.21666 1.32805 3.88715 1.05416C4.55764 0.780262 5.27602 0.642837 6.00026 0.649919C6.85613 0.656446 7.70066 0.846375 8.47692 1.2069C9.25317 1.56743 9.94312 2.09018 10.5003 2.73992C11.0574 2.09018 11.7473 1.56743 12.5236 1.2069C13.2999 0.846375 14.1444 0.656446 15.0003 0.649919C15.7245 0.642837 16.4429 0.780262 17.1134 1.05416C17.7839 1.32805 18.393 1.73291 18.9051 2.24505C19.4173 2.75719 19.8221 3.36632 20.096 4.03681C20.3699 4.7073 20.5073 5.42568 20.5003 6.14992C20.5003 9.92992 17.1003 13.0099 11.9503 17.6899L10.5003 18.9999Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg
            width="23"
            height="29"
            viewBox="0 0 23 29"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4998 28.355C12.2529 28.3529 12.9746 28.0528 13.5071 27.5203C14.0396 26.9878 14.3397 26.2661 14.3418 25.513H8.65784C8.6577 25.8863 8.73112 26.2559 8.8739 26.6007C9.01668 26.9456 9.22602 27.259 9.48995 27.5229C9.75388 27.7868 10.0672 27.9962 10.4121 28.1389C10.757 28.2817 11.1266 28.3551 11.4998 28.355ZM20.0258 19.829V12.729C20.0258 8.36701 17.6958 4.71501 13.6318 3.74801V2.77701C13.6318 2.2117 13.4073 1.66954 13.0075 1.26981C12.6078 0.870076 12.0656 0.645508 11.5003 0.645508C10.935 0.645508 10.3929 0.870076 9.99314 1.26981C9.5934 1.66954 9.36884 2.2117 9.36884 2.77701V3.74601C5.29084 4.71201 2.97484 8.34601 2.97484 12.727V19.827L0.131836 22.671V24.092H22.8678V22.671L20.0258 19.829Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <img src="./images/image.png" alt="girl_genifer"></img>
        </div>
      </Boxes>
    </Navigation>
  );
};

export default Header;