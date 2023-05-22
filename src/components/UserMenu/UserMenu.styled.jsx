import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;`;
  
  
  export const Username = styled.p`
  font-family: 'Roboto Slab';
  font-size: 28px;
    font-weight: 500;
    color: #005bea;`;
  
    export const LogoutBtn = styled.button`
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    &:hover,
    &:focus {
      background-image: linear-gradient(to right, #ddd6f3 0%, #faaca8 51%, #ddd6f3 100%);
      color: #fff;
      cursor: pointer;
    }
  }`;
    