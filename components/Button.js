import styled from 'styled-components';

const StyledButton = styled.button.attrs(({ type, disabled }) => ({
  type: type || 'button',
  disabled: disabled || false,
}))`
  font-family: 'Lexend Tera';
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  cursor: pointer;
  padding: ${({ padding }) => padding || '5px'};
  width: ${({ width }) => width || '75px'};
  min-width: ${({ minWidth }) => minWidth || ''};
  height: ${({ height }) => height || ''};
  font-size: ${({ fontSize }) => fontSize || ''};
  text-align: center;
  align-self: flex-end;

  :disabled {
    cursor: auto;
    opacity: 0.6;
  }
`;

export default StyledButton;
