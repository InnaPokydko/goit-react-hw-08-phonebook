import styled from '@emotion/styled';

export const ContactStyle = styled.li`
display: flex;
justify-content: space-between;
gap: 5px;
padding: 5px;`

export const BtnDelete = styled.button`
height: 20px;
width: 60px;
align-self: flex-end;
color: #000;
text-transform: capitalize;
border: none;
border-radius: 14px;
background-color: #DB7093;
font-size: 10px;
cursor: pointer;
box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);

&:hover {
  background-image: linear-gradient(to right, #ddd6f3 0%, #faaca8 51%, #ddd6f3 100%);
}
}`
