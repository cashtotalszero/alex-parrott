import styled from 'styled-components';

// TODO: Add attrs for type button!!!

const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  font-family: 'Lexend Tera';
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  cursor: pointer;
  padding: 5px;
  width: 75px;
  text-align: center;
  align-self: flex-end;
`;

export default StyledButton;
