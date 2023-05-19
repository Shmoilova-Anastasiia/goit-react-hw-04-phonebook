import styled from '@emotion/styled'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  width: 300px;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 18px;
`;

export const Btn = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 8px;
width: 50px;
padding: 5px;
cursor: pointer;

&:hover {
    border-color: #de3d32;
`;
