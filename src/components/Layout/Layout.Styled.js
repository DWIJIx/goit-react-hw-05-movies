import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  padding: 15px;
  border-bottom: 2px solid gray;
  z-index: 100;
  background-color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 30px;
  font-size: larger;
  font-weight: bolder;
`;

// export const Loader = styled.span`
//   margin-top: 200px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50% -50%);
//   font-size: 48px;
//   display: inline-block;
//   font-family: Arial, Helvetica, sans-serif;
//   font-weight: bold;
//   color: #d6e0ff;
//   letter-spacing: 2px;
//   position: relative;
//   box-sizing: border-box;

//   &::after {
//     content: 'Loading';
//     position: absolute;
//     left: 0;
//     top: 0;
//     color: #263238;
//     text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     box-sizing: border-box;
//     animation: animloader 1s linear infinite;
//   }

//   @keyframes animloader {
//     0% {
//       height: 100%;
//     }

//     100% {
//       height: 0%;
//     }
//   }
// `;
