import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Name = styled.p`
  font-size: 20px;
  line-height: 1.11;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;

export const BtnDelete = styled.button`

  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: block;
  min-width: 140px;
  height: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: white;
  background-color: #7c90f3;
  
 
  }
`;
