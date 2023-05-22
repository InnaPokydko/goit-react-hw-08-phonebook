import styled from '@emotion/styled';

export const LoginBox = styled.div`
min-height: 100vh;
width: 600px;
// background: linear-gradient(
//   172deg,
//   rgba(122, 182, 191, 0.24135591736694673) 0%,
//   rgba(20, 67, 152, 0.03687412464985995) 35%,
//   rgba(243, 132, 140, 0.28617384453781514) 100%
// );
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 300px;
padding: 30px;
margin: 20px;
border-radius: 10px;
gap: 20px;
font-size: 16px;
background: inherit;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  color: #000;
  background: #cfd9df;
  border-color: #c9ccd3;
  font-size: 16px;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
`;

export const BtnForm = styled.button`
  // height: 50px;
  width: 150px;
  align-self: center;
  color: #fff;
  text-transform: capitalize;
  border: none;
  border-radius: 10px;
  background-color: #DB7093;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);

  &:hover {
    background-image: linear-gradient(to right, #ddd6f3 0%, #faaca8 51%, #ddd6f3 100%);
  }`;