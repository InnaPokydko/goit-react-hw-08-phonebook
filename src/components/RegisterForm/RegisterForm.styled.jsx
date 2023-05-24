import styled from '@emotion/styled';

export const RegisterBox = styled.div`
min-height: 500px;
display: flex;
justify-content: center;
  margin: 40px;
width: 800px;
background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 300px;
height: 200px;
padding: 30px;
margin: 60px;
border-radius: 10px;
gap: 15px;
font-size: 16px;
background: #cfd9df;
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
  background-color: #0072ff;
  background-font-size: 16px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);

  &:hover {
    background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
  }`;