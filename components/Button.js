import styled from 'styled-components';

const StyledButton = styled.button.attrs(({ type, disabled }) => ({
  type: type || 'button',
  disabled: disabled || false,
}))`
  font-family: ${({ theme }) => theme.fonts.header};
  border-radius: 5px;
  box-shadow: ${({ theme }) => `0 2px 8px ${theme.colors.shadow}`};
  background-color: ${({ theme }) => theme.colors.palette2};
  color: ${({ theme }) => theme.colors.white};
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
